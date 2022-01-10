// @generated by protobuf-ts 2.1.0 with parameter
// client_grpc1,server_grpc1,generate_dependencies
// @generated from protobuf file "metrics.proto" (package
// "org.apache.beam.model.pipeline.v1", syntax proto3)
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
// Protocol Buffers for metrics classes, used in the Fn API, Job API, and by
// SDKs.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * A specification for describing a well known MonitoringInfo.
 *
 * All specifications are uniquely identified by the urn.
 *
 * @generated from protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoSpec
 */
export interface MonitoringInfoSpec {
  /**
   * Defines the semantic meaning of the metric or monitored state.
   *
   * See MonitoringInfoSpecs.Enum for the set of well known metrics/monitored
   * state.
   *
   * @generated from protobuf field: string urn = 1;
   */
  urn: string;
  /**
   * Defines the required encoding and aggregation method for the payload.
   *
   * See MonitoringInfoTypeUrns.Enum for the set of well known types.
   *
   * @generated from protobuf field: string type = 2;
   */
  type: string;
  /**
   * The list of required labels for the specified urn and type.
   *
   * @generated from protobuf field: repeated string required_labels = 3;
   */
  requiredLabels: string[];
  /**
   * Extra non functional parts of the spec for descriptive purposes.
   * i.e. description, units, etc.
   *
   * @generated from protobuf field: repeated
   * org.apache.beam.model.pipeline.v1.Annotation annotations = 4;
   */
  annotations: Annotation[];
}
/**
 * The key name and value string of MonitoringInfo annotations.
 *
 * @generated from protobuf message org.apache.beam.model.pipeline.v1.Annotation
 */
export interface Annotation {
  /**
   * @generated from protobuf field: string key = 1;
   */
  key: string;
  /**
   * @generated from protobuf field: string value = 2;
   */
  value: string;
}
/**
 * A set of well known MonitoringInfo specifications.
 *
 * @generated from protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoSpecs
 */
export interface MonitoringInfoSpecs {}
/**
 * @generated from protobuf enum
 * org.apache.beam.model.pipeline.v1.MonitoringInfoSpecs.Enum
 */
export enum MonitoringInfoSpecs_Enum {
  /**
   * Represents an integer counter where values are summed across bundles.
   *
   * @generated from protobuf enum value: USER_SUM_INT64 = 0;
   */
  USER_SUM_INT64 = 0,
  /**
   * Represents a double counter where values are summed across bundles.
   *
   * @generated from protobuf enum value: USER_SUM_DOUBLE = 1;
   */
  USER_SUM_DOUBLE = 1,
  /**
   * Represents a distribution of an integer value where:
   *   - count: represents the number of values seen across all bundles
   *   - sum: represents the total of the value across all bundles
   *   - min: represents the smallest value seen across all bundles
   *   - max: represents the largest value seen across all bundles
   *
   * @generated from protobuf enum value: USER_DISTRIBUTION_INT64 = 2;
   */
  USER_DISTRIBUTION_INT64 = 2,
  /**
   * Represents a distribution of a double value where:
   *   - count: represents the number of values seen across all bundles
   *   - sum: represents the total of the value across all bundles
   *   - min: represents the smallest value seen across all bundles
   *   - max: represents the largest value seen across all bundles
   *
   * @generated from protobuf enum value: USER_DISTRIBUTION_DOUBLE = 3;
   */
  USER_DISTRIBUTION_DOUBLE = 3,
  /**
   * Represents the latest seen integer value. The timestamp is used to
   * provide an "ordering" over multiple values to determine which is the
   * latest.
   *
   * @generated from protobuf enum value: USER_LATEST_INT64 = 4;
   */
  USER_LATEST_INT64 = 4,
  /**
   * Represents the latest seen double value. The timestamp is used to
   * provide an "ordering" over multiple values to determine which is the
   * latest.
   *
   * @generated from protobuf enum value: USER_LATEST_DOUBLE = 5;
   */
  USER_LATEST_DOUBLE = 5,
  /**
   * Represents the largest set of integer values seen across bundles.
   *
   * @generated from protobuf enum value: USER_TOP_N_INT64 = 6;
   */
  USER_TOP_N_INT64 = 6,
  /**
   * Represents the largest set of double values seen across bundles.
   *
   * @generated from protobuf enum value: USER_TOP_N_DOUBLE = 7;
   */
  USER_TOP_N_DOUBLE = 7,
  /**
   * Represents the smallest set of integer values seen across bundles.
   *
   * @generated from protobuf enum value: USER_BOTTOM_N_INT64 = 8;
   */
  USER_BOTTOM_N_INT64 = 8,
  /**
   * Represents the smallest set of double values seen across bundles.
   *
   * @generated from protobuf enum value: USER_BOTTOM_N_DOUBLE = 9;
   */
  USER_BOTTOM_N_DOUBLE = 9,
  /**
   * @generated from protobuf enum value: ELEMENT_COUNT = 10;
   */
  ELEMENT_COUNT = 10,
  /**
   * @generated from protobuf enum value: SAMPLED_BYTE_SIZE = 11;
   */
  SAMPLED_BYTE_SIZE = 11,
  /**
   * @generated from protobuf enum value: START_BUNDLE_MSECS = 12;
   */
  START_BUNDLE_MSECS = 12,
  /**
   * @generated from protobuf enum value: PROCESS_BUNDLE_MSECS = 13;
   */
  PROCESS_BUNDLE_MSECS = 13,
  /**
   * @generated from protobuf enum value: FINISH_BUNDLE_MSECS = 14;
   */
  FINISH_BUNDLE_MSECS = 14,
  /**
   * @generated from protobuf enum value: TOTAL_MSECS = 15;
   */
  TOTAL_MSECS = 15,
  /**
   * All values reported across all beam:metric:ptransform_progress:.*:v1
   * metrics are of the same magnitude.
   *
   * @generated from protobuf enum value: WORK_REMAINING = 16;
   */
  WORK_REMAINING = 16,
  /**
   * All values reported across all beam:metric:ptransform_progress:.*:v1
   * metrics are of the same magnitude.
   *
   * @generated from protobuf enum value: WORK_COMPLETED = 17;
   */
  WORK_COMPLETED = 17,
  /**
   * The (0-based) index of the latest item processed from the data channel.
   * This gives an indication of the SDKs progress through the data channel,
   * and is a lower bound on where it is able to split.
   * For an SDK that processes items sequentially, this is equivalently the
   * number of items fully processed (or -1 if processing has not yet started).
   *
   * @generated from protobuf enum value: DATA_CHANNEL_READ_INDEX = 18;
   */
  DATA_CHANNEL_READ_INDEX = 18,
  /**
   * @generated from protobuf enum value: API_REQUEST_COUNT = 19;
   */
  API_REQUEST_COUNT = 19,
  /**
   * @generated from protobuf enum value: API_REQUEST_LATENCIES = 20;
   */
  API_REQUEST_LATENCIES = 20,
}
/**
 * A set of properties for the MonitoringInfoLabel, this is useful to obtain
 * the proper label string for the MonitoringInfoLabel.
 *
 * @generated from protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoLabelProps
 */
export interface MonitoringInfoLabelProps {
  /**
   * The label key to use in the MonitoringInfo labels map.
   *
   * @generated from protobuf field: string name = 1;
   */
  name: string;
}
/**
 * @generated from protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfo
 */
export interface MonitoringInfo {
  /**
   * (Required) Defines the semantic meaning of the metric or monitored state.
   *
   * See MonitoringInfoSpecs.Enum for the set of well known metrics/monitored
   * state.
   *
   * @generated from protobuf field: string urn = 1;
   */
  urn: string;
  /**
   * (Required) Defines the encoding and aggregation method for the payload.
   *
   * See MonitoringInfoTypeUrns.Enum for the set of well known types.
   *
   * @generated from protobuf field: string type = 2;
   */
  type: string;
  /**
   * (Required) The metric or monitored state encoded as per the specification
   * defined by the type.
   *
   * @generated from protobuf field: bytes payload = 3;
   */
  payload: Uint8Array;
  /**
   * A set of key and value labels which define the scope of the metric. For
   * well known URNs, the set of required labels is provided by the associated
   * MonitoringInfoSpec.
   *
   * Either a well defined entity id for matching the enum names in
   * the MonitoringInfoLabels enum or any arbitrary label
   * set by a custom metric or user metric.
   *
   * A monitoring system is expected to be able to aggregate the metrics
   * together for all updates having the same URN and labels. Some systems such
   * as Stackdriver will be able to aggregate the metrics using a subset of the
   * provided labels
   *
   * @generated from protobuf field: map<string, string> labels = 4;
   */
  labels: { [key: string]: string };
  /**
   * This indicates the start of the time range over which this value was
   * measured.
   * This is needed by some external metric aggregation services
   * to indicate when the reporter of the metric first began collecting the
   * cumulative value for the timeseries.
   * If the SDK Harness restarts, it should reset the start_time, and reset
   * the collection of cumulative metrics (i.e. start to count again from 0).
   * HarnessMonitoringInfos should set this start_time once, when the
   * MonitoringInfo is first reported.
   * ProcessBundle MonitoringInfos should set a start_time for each bundle.
   *
   * @generated from protobuf field: google.protobuf.Timestamp start_time = 5;
   */
  startTime?: Timestamp;
}
/**
 * @generated from protobuf enum
 * org.apache.beam.model.pipeline.v1.MonitoringInfo.MonitoringInfoLabels
 */
export enum MonitoringInfo_MonitoringInfoLabels {
  /**
   * The values used for TRANSFORM, PCOLLECTION, WINDOWING_STRATEGY
   * CODER, ENVIRONMENT, etc. must always match the keys used to
   * refer to them. For actively processed bundles, these should match the
   * values within the ProcessBundleDescriptor. For job management APIs,
   * these should match values within the original pipeline representation.
   *
   * @generated from protobuf enum value: TRANSFORM = 0;
   */
  TRANSFORM = 0,
  /**
   * @generated from protobuf enum value: PCOLLECTION = 1;
   */
  PCOLLECTION = 1,
  /**
   * @generated from protobuf enum value: WINDOWING_STRATEGY = 2;
   */
  WINDOWING_STRATEGY = 2,
  /**
   * @generated from protobuf enum value: CODER = 3;
   */
  CODER = 3,
  /**
   * @generated from protobuf enum value: ENVIRONMENT = 4;
   */
  ENVIRONMENT = 4,
  /**
   * @generated from protobuf enum value: NAMESPACE = 5;
   */
  NAMESPACE = 5,
  /**
   * @generated from protobuf enum value: NAME = 6;
   */
  NAME = 6,
  /**
   * @generated from protobuf enum value: SERVICE = 7;
   */
  SERVICE = 7,
  /**
   * @generated from protobuf enum value: METHOD = 8;
   */
  METHOD = 8,
  /**
   * @generated from protobuf enum value: RESOURCE = 9;
   */
  RESOURCE = 9,
  /**
   * @generated from protobuf enum value: STATUS = 10;
   */
  STATUS = 10,
  /**
   * @generated from protobuf enum value: BIGQUERY_PROJECT_ID = 11;
   */
  BIGQUERY_PROJECT_ID = 11,
  /**
   * @generated from protobuf enum value: BIGQUERY_DATASET = 12;
   */
  BIGQUERY_DATASET = 12,
  /**
   * @generated from protobuf enum value: BIGQUERY_TABLE = 13;
   */
  BIGQUERY_TABLE = 13,
  /**
   * @generated from protobuf enum value: BIGQUERY_VIEW = 14;
   */
  BIGQUERY_VIEW = 14,
  /**
   * @generated from protobuf enum value: BIGQUERY_QUERY_NAME = 15;
   */
  BIGQUERY_QUERY_NAME = 15,
  /**
   * @generated from protobuf enum value: GCS_BUCKET = 16;
   */
  GCS_BUCKET = 16,
  /**
   * @generated from protobuf enum value: GCS_PROJECT_ID = 17;
   */
  GCS_PROJECT_ID = 17,
  /**
   * @generated from protobuf enum value: DATASTORE_PROJECT = 18;
   */
  DATASTORE_PROJECT = 18,
  /**
   * @generated from protobuf enum value: DATASTORE_NAMESPACE = 19;
   */
  DATASTORE_NAMESPACE = 19,
  /**
   * @generated from protobuf enum value: BIGTABLE_PROJECT_ID = 20;
   */
  BIGTABLE_PROJECT_ID = 20,
  /**
   * @generated from protobuf enum value: INSTANCE_ID = 21;
   */
  INSTANCE_ID = 21,
  /**
   * @generated from protobuf enum value: TABLE_ID = 22;
   */
  TABLE_ID = 22,
  /**
   * @generated from protobuf enum value: SPANNER_PROJECT_ID = 23;
   */
  SPANNER_PROJECT_ID = 23,
  /**
   * @generated from protobuf enum value: SPANNER_DATABASE_ID = 24;
   */
  SPANNER_DATABASE_ID = 24,
  /**
   * @generated from protobuf enum value: SPANNER_TABLE_ID = 25;
   */
  SPANNER_TABLE_ID = 25,
  /**
   * @generated from protobuf enum value: SPANNER_INSTANCE_ID = 26;
   */
  SPANNER_INSTANCE_ID = 26,
  /**
   * @generated from protobuf enum value: SPANNER_QUERY_NAME = 27;
   */
  SPANNER_QUERY_NAME = 27,
}
/**
 * A set of well known URNs that specify the encoding and aggregation method.
 *
 * @generated from protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoTypeUrns
 */
export interface MonitoringInfoTypeUrns {}
/**
 * @generated from protobuf enum
 * org.apache.beam.model.pipeline.v1.MonitoringInfoTypeUrns.Enum
 */
export enum MonitoringInfoTypeUrns_Enum {
  /**
   * Represents an integer counter where values are summed across bundles.
   *
   * Encoding: <value>
   *   - value: beam:coder:varint:v1
   *
   * @generated from protobuf enum value: SUM_INT64_TYPE = 0;
   */
  SUM_INT64_TYPE = 0,
  /**
   * Represents a double counter where values are summed across bundles.
   *
   * Encoding: <value>
   *   value: beam:coder:double:v1
   *
   * @generated from protobuf enum value: SUM_DOUBLE_TYPE = 1;
   */
  SUM_DOUBLE_TYPE = 1,
  /**
   * Represents a distribution of an integer value where:
   *   - count: represents the number of values seen across all bundles
   *   - sum: represents the total of the value across all bundles
   *   - min: represents the smallest value seen across all bundles
   *   - max: represents the largest value seen across all bundles
   *
   * Encoding: <count><sum><min><max>
   *   - count: beam:coder:varint:v1
   *   - sum:   beam:coder:varint:v1
   *   - min:   beam:coder:varint:v1
   *   - max:   beam:coder:varint:v1
   *
   * @generated from protobuf enum value: DISTRIBUTION_INT64_TYPE = 2;
   */
  DISTRIBUTION_INT64_TYPE = 2,
  /**
   * Represents a distribution of a double value where:
   *   - count: represents the number of values seen across all bundles
   *   - sum: represents the total of the value across all bundles
   *   - min: represents the smallest value seen across all bundles
   *   - max: represents the largest value seen across all bundles
   *
   * Encoding: <count><sum><min><max>
   *   - count: beam:coder:varint:v1
   *   - sum:   beam:coder:double:v1
   *   - min:   beam:coder:double:v1
   *   - max:   beam:coder:double:v1
   *
   * @generated from protobuf enum value: DISTRIBUTION_DOUBLE_TYPE = 3;
   */
  DISTRIBUTION_DOUBLE_TYPE = 3,
  /**
   * Represents the latest seen integer value. The timestamp is used to
   * provide an "ordering" over multiple values to determine which is the
   * latest.
   *
   * Encoding: <timestamp><value>
   *   - timestamp: beam:coder:varint:v1     (milliseconds since epoch)
   *   - value:     beam:coder:varint:v1
   *
   * @generated from protobuf enum value: LATEST_INT64_TYPE = 4;
   */
  LATEST_INT64_TYPE = 4,
  /**
   * Represents the latest seen double value. The timestamp is used to
   * provide an "ordering" over multiple values to determine which is the
   * latest.
   *
   * Encoding: <timestamp><value>
   *   - timestamp: beam:coder:varint:v1     (milliseconds since epoch)
   *   - value:     beam:coder:double:v1
   *
   * @generated from protobuf enum value: LATEST_DOUBLE_TYPE = 5;
   */
  LATEST_DOUBLE_TYPE = 5,
  /**
   * Represents the largest set of integer values seen across bundles.
   *
   * Encoding: <iter><value1><value2>...<valueN></iter>
   *   - iter:   beam:coder:iterable:v1
   *   - valueX: beam:coder:varint:v1
   *
   * @generated from protobuf enum value: TOP_N_INT64_TYPE = 6;
   */
  TOP_N_INT64_TYPE = 6,
  /**
   * Represents the largest set of double values seen across bundles.
   *
   * Encoding: <iter><value1><value2>...<valueN></iter>
   *   - iter:   beam:coder:iterable:v1
   *   - valueX: beam:coder<beam:coder:double:v1
   *
   * @generated from protobuf enum value: TOP_N_DOUBLE_TYPE = 7;
   */
  TOP_N_DOUBLE_TYPE = 7,
  /**
   * Represents the smallest set of integer values seen across bundles.
   *
   * Encoding: <iter><value1><value2>...<valueN></iter>
   *   - iter:   beam:coder:iterable:v1
   *   - valueX: beam:coder:varint:v1
   *
   * @generated from protobuf enum value: BOTTOM_N_INT64_TYPE = 8;
   */
  BOTTOM_N_INT64_TYPE = 8,
  /**
   * Represents the smallest set of double values seen across bundles.
   *
   * Encoding: <iter><value1><value2>...<valueN></iter>
   *   - iter:   beam:coder:iterable:v1
   *   - valueX: beam:coder:double:v1
   *
   * @generated from protobuf enum value: BOTTOM_N_DOUBLE_TYPE = 9;
   */
  BOTTOM_N_DOUBLE_TYPE = 9,
  /**
   * Encoding: <iter><value1><value2>...<valueN></iter>
   *   - iter:   beam:coder:iterable:v1
   *   - valueX: beam:coder:double:v1
   *
   * @generated from protobuf enum value: PROGRESS_TYPE = 10;
   */
  PROGRESS_TYPE = 10,
}
// @generated message type with reflection information, may provide speed
// optimized methods
class MonitoringInfoSpec$Type extends MessageType<MonitoringInfoSpec> {
  constructor() {
    super("org.apache.beam.model.pipeline.v1.MonitoringInfoSpec", [
      { no: 1, name: "urn", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 3,
        name: "required_labels",
        kind: "scalar",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 4,
        name: "annotations",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Annotation,
      },
    ]);
  }
  create(value?: PartialMessage<MonitoringInfoSpec>): MonitoringInfoSpec {
    const message = { urn: "", type: "", requiredLabels: [], annotations: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<MonitoringInfoSpec>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MonitoringInfoSpec
  ): MonitoringInfoSpec {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string urn */ 1:
          message.urn = reader.string();
          break;
        case /* string type */ 2:
          message.type = reader.string();
          break;
        case /* repeated string required_labels */ 3:
          message.requiredLabels.push(reader.string());
          break;
        case /* repeated org.apache.beam.model.pipeline.v1.Annotation
                annotations */
        4:
          message.annotations.push(
            Annotation.internalBinaryRead(reader, reader.uint32(), options)
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: MonitoringInfoSpec,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string urn = 1; */
    if (message.urn !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.urn);
    /* string type = 2; */
    if (message.type !== "")
      writer.tag(2, WireType.LengthDelimited).string(message.type);
    /* repeated string required_labels = 3; */
    for (let i = 0; i < message.requiredLabels.length; i++)
      writer.tag(3, WireType.LengthDelimited).string(message.requiredLabels[i]);
    /* repeated org.apache.beam.model.pipeline.v1.Annotation annotations = 4; */
    for (let i = 0; i < message.annotations.length; i++)
      Annotation.internalBinaryWrite(
        message.annotations[i],
        writer.tag(4, WireType.LengthDelimited).fork(),
        options
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoSpec
 */
export const MonitoringInfoSpec = new MonitoringInfoSpec$Type();
// @generated message type with reflection information, may provide speed
// optimized methods
class Annotation$Type extends MessageType<Annotation> {
  constructor() {
    super("org.apache.beam.model.pipeline.v1.Annotation", [
      { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<Annotation>): Annotation {
    const message = { key: "", value: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<Annotation>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Annotation
  ): Annotation {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string key */ 1:
          message.key = reader.string();
          break;
        case /* string value */ 2:
          message.value = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: Annotation,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string key = 1; */
    if (message.key !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.key);
    /* string value = 2; */
    if (message.value !== "")
      writer.tag(2, WireType.LengthDelimited).string(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.pipeline.v1.Annotation
 */
export const Annotation = new Annotation$Type();
// @generated message type with reflection information, may provide speed
// optimized methods
class MonitoringInfoSpecs$Type extends MessageType<MonitoringInfoSpecs> {
  constructor() {
    super("org.apache.beam.model.pipeline.v1.MonitoringInfoSpecs", []);
  }
  create(value?: PartialMessage<MonitoringInfoSpecs>): MonitoringInfoSpecs {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<MonitoringInfoSpecs>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MonitoringInfoSpecs
  ): MonitoringInfoSpecs {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: MonitoringInfoSpecs,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoSpecs
 */
export const MonitoringInfoSpecs = new MonitoringInfoSpecs$Type();
// @generated message type with reflection information, may provide speed
// optimized methods
class MonitoringInfoLabelProps$Type extends MessageType<MonitoringInfoLabelProps> {
  constructor() {
    super("org.apache.beam.model.pipeline.v1.MonitoringInfoLabelProps", [
      { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(
    value?: PartialMessage<MonitoringInfoLabelProps>
  ): MonitoringInfoLabelProps {
    const message = { name: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<MonitoringInfoLabelProps>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MonitoringInfoLabelProps
  ): MonitoringInfoLabelProps {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string name */ 1:
          message.name = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: MonitoringInfoLabelProps,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string name = 1; */
    if (message.name !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.name);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoLabelProps
 */
export const MonitoringInfoLabelProps = new MonitoringInfoLabelProps$Type();
// @generated message type with reflection information, may provide speed
// optimized methods
class MonitoringInfo$Type extends MessageType<MonitoringInfo> {
  constructor() {
    super("org.apache.beam.model.pipeline.v1.MonitoringInfo", [
      { no: 1, name: "urn", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
      {
        no: 4,
        name: "labels",
        kind: "map",
        K: 9 /*ScalarType.STRING*/,
        V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      },
      { no: 5, name: "start_time", kind: "message", T: () => Timestamp },
    ]);
  }
  create(value?: PartialMessage<MonitoringInfo>): MonitoringInfo {
    const message = {
      urn: "",
      type: "",
      payload: new Uint8Array(0),
      labels: {},
    };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<MonitoringInfo>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MonitoringInfo
  ): MonitoringInfo {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string urn */ 1:
          message.urn = reader.string();
          break;
        case /* string type */ 2:
          message.type = reader.string();
          break;
        case /* bytes payload */ 3:
          message.payload = reader.bytes();
          break;
        case /* map<string, string> labels */ 4:
          this.binaryReadMap4(message.labels, reader, options);
          break;
        case /* google.protobuf.Timestamp start_time */ 5:
          message.startTime = Timestamp.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.startTime
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  private binaryReadMap4(
    map: MonitoringInfo["labels"],
    reader: IBinaryReader,
    options: BinaryReadOptions
  ): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof MonitoringInfo["labels"] | undefined,
      val: MonitoringInfo["labels"][any] | undefined;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error(
            "unknown map entry field for field org.apache.beam.model.pipeline.v1.MonitoringInfo.labels"
          );
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(
    message: MonitoringInfo,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string urn = 1; */
    if (message.urn !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.urn);
    /* string type = 2; */
    if (message.type !== "")
      writer.tag(2, WireType.LengthDelimited).string(message.type);
    /* bytes payload = 3; */
    if (message.payload.length)
      writer.tag(3, WireType.LengthDelimited).bytes(message.payload);
    /* map<string, string> labels = 4; */
    for (let k of Object.keys(message.labels))
      writer
        .tag(4, WireType.LengthDelimited)
        .fork()
        .tag(1, WireType.LengthDelimited)
        .string(k)
        .tag(2, WireType.LengthDelimited)
        .string(message.labels[k])
        .join();
    /* google.protobuf.Timestamp start_time = 5; */
    if (message.startTime)
      Timestamp.internalBinaryWrite(
        message.startTime,
        writer.tag(5, WireType.LengthDelimited).fork(),
        options
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfo
 */
export const MonitoringInfo = new MonitoringInfo$Type();
// @generated message type with reflection information, may provide speed
// optimized methods
class MonitoringInfoTypeUrns$Type extends MessageType<MonitoringInfoTypeUrns> {
  constructor() {
    super("org.apache.beam.model.pipeline.v1.MonitoringInfoTypeUrns", []);
  }
  create(
    value?: PartialMessage<MonitoringInfoTypeUrns>
  ): MonitoringInfoTypeUrns {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<MonitoringInfoTypeUrns>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MonitoringInfoTypeUrns
  ): MonitoringInfoTypeUrns {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: MonitoringInfoTypeUrns,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message
 * org.apache.beam.model.pipeline.v1.MonitoringInfoTypeUrns
 */
export const MonitoringInfoTypeUrns = new MonitoringInfoTypeUrns$Type();
