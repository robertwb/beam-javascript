// @generated by protobuf-ts 2.1.0 with parameter
// client_grpc1,generate_dependencies
// @generated from protobuf file "beam_expansion_api.proto" (package
// "org.apache.beam.model.expansion.v1", syntax proto3)
// tslint:disable
//
//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
//
// Protocol Buffers describing the Expansion API, an api for expanding
// transforms in a remote SDK.
//
import { ExpansionService } from "./beam_expansion_api";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { ExpansionResponse } from "./beam_expansion_api";
import type { ExpansionRequest } from "./beam_expansion_api";
import * as grpc from "@grpc/grpc-js";
/**
 * Job Service for constructing pipelines
 *
 * @generated from protobuf service
 * org.apache.beam.model.expansion.v1.ExpansionService
 */
export interface IExpansionServiceClient {
  /**
   * @generated from protobuf rpc:
   * Expand(org.apache.beam.model.expansion.v1.ExpansionRequest) returns
   * (org.apache.beam.model.expansion.v1.ExpansionResponse);
   */
  expand(
    input: ExpansionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (err: grpc.ServiceError | null, value?: ExpansionResponse) => void
  ): grpc.ClientUnaryCall;
  expand(
    input: ExpansionRequest,
    metadata: grpc.Metadata,
    callback: (err: grpc.ServiceError | null, value?: ExpansionResponse) => void
  ): grpc.ClientUnaryCall;
  expand(
    input: ExpansionRequest,
    options: grpc.CallOptions,
    callback: (err: grpc.ServiceError | null, value?: ExpansionResponse) => void
  ): grpc.ClientUnaryCall;
  expand(
    input: ExpansionRequest,
    callback: (err: grpc.ServiceError | null, value?: ExpansionResponse) => void
  ): grpc.ClientUnaryCall;
}
/**
 * Job Service for constructing pipelines
 *
 * @generated from protobuf service
 * org.apache.beam.model.expansion.v1.ExpansionService
 */
export class ExpansionServiceClient
  extends grpc.Client
  implements IExpansionServiceClient
{
  private readonly _binaryOptions: Partial<
    BinaryReadOptions & BinaryWriteOptions
  >;
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options: grpc.ClientOptions = {},
    binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}
  ) {
    super(address, credentials, options);
    this._binaryOptions = binaryOptions;
  }
  /**
   * @generated from protobuf rpc:
   * Expand(org.apache.beam.model.expansion.v1.ExpansionRequest) returns
   * (org.apache.beam.model.expansion.v1.ExpansionResponse);
   */
  expand(
    input: ExpansionRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: ExpansionResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: ExpansionResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: ExpansionResponse
    ) => void
  ): grpc.ClientUnaryCall {
    const method = ExpansionService.methods[0];
    return this.makeUnaryRequest<ExpansionRequest, ExpansionResponse>(
      `/${ExpansionService.typeName}/${method.name}`,
      (value: ExpansionRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): ExpansionResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any
    );
  }
}
