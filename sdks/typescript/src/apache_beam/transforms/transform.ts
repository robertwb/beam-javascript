/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as runnerApi from "../proto/beam_runner_api";
import { PValue } from "../pvalue";
import { Pipeline } from "../base";

export function withName<T>(name: string | (() => string), arg: T) {
  (arg as any).beamName = name;
  return arg;
}

export function extractName<T>(withName: T): string {
  const untyped = withName as any;
  if (untyped.beamName != undefined) {
    if (typeof untyped.beamName == "string") {
      return untyped.beamName;
    } else {
      return untyped.beamName();
    }
  } else if (
    untyped.name != undefined &&
    untyped.name &&
    untyped.name != "anonymous"
  ) {
    return untyped.name;
  } else {
    const stringified = ("" + withName).replace(/s+/, " ");
    if (stringified.length < 60) {
      return stringified;
    } else {
      throw new Error("Unable to deduce name, please use withName(...).");
    }
  }
}

// NOTE: It could be more idiomatic javascript to simply use the function type
// (InputT, Pipeline, runnerApi.PTransform) => OutputT rather than a transform
// class hierarchy here, a class is chosen to serve as a more obvious
// representative for other languages to follow.
// This more functional form is still preferred for users, and accepted
// as an argument to apply for the various pvalues (see pvalue.ts).
//
// Note also that the requirement for both a synchronous and asynchronous
// variant is imposed by javascript, and is not necessarily relevant in other
// languages (especially if an asynchronous call can be turned into a blocking
// call rather than forcing the asynchronous nature all the way up the call
// hierarchy).

export class AsyncPTransform<
  InputT extends PValue<any>,
  OutputT extends PValue<any>
> {
  beamName: string | (() => string);

  constructor(name: string | (() => string) | null = null) {
    this.beamName = name || this.constructor.name;
  }

  async asyncExpand(input: InputT): Promise<OutputT> {
    throw new Error("Method expand has not been implemented.");
  }

  async asyncExpandInternal(
    input: InputT,
    pipeline: Pipeline,
    transformProto: runnerApi.PTransform
  ): Promise<OutputT> {
    return this.asyncExpand(input);
  }
}

export class PTransform<
  InputT extends PValue<any>,
  OutputT extends PValue<any>
> extends AsyncPTransform<InputT, OutputT> {
  expand(input: InputT): OutputT {
    throw new Error("Method expand has not been implemented.");
  }

  async asyncExpand(input: InputT): Promise<OutputT> {
    return this.expand(input);
  }

  expandInternal(
    input: InputT,
    pipeline: Pipeline,
    transformProto: runnerApi.PTransform
  ): OutputT {
    return this.expand(input);
  }

  async asyncExpandInternal(
    input: InputT,
    pipeline: Pipeline,
    transformProto: runnerApi.PTransform
  ): Promise<OutputT> {
    return this.expandInternal(input, pipeline, transformProto);
  }
}