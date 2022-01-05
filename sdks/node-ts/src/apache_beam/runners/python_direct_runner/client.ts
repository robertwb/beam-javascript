import {ChannelCredentials} from '@grpc/grpc-js';
import {GrpcTransport} from '@protobuf-ts/grpc-transport';
import {RpcTransport} from "@protobuf-ts/runtime-rpc";
import {JobServiceClient, IJobServiceClient} from '../../proto/beam_job_api.client'

import * as runnerApiProto from '../../proto/beam_runner_api';

/**
 * Wrapper for JobServiceClient.
 */
export class RemoteJobServiceClient {
    client: JobServiceClient;

    /**
     * @param host Host and port of JobService server.
     * @param {optional} transport By default, GrpcTransport is used. Supply an RpcTransport to override.
     * @param channelCredentials ChannelCredentials.createInsecure() by default. Override with a ChannelCredentials.
     */
    constructor(
        host: string,
        transport?: RpcTransport,
        channelCredentials?: ChannelCredentials,
    ) {
        transport = transport || new GrpcTransport({
            host,
            channelCredentials: channelCredentials || ChannelCredentials.createInsecure(),
        });
        this.client = new JobServiceClient(transport);
    }

    async prepare(pipeline: runnerApiProto.Pipeline, jobName: string) {
        return await this.callPrepare(this.client, pipeline, jobName);
    }

    async run(preparationId: string) {
        return await this.callRun(this.client, preparationId);
    }

    private async callPrepare(
        client: IJobServiceClient,
        pipeline: runnerApiProto.Pipeline,
        jobName: string) {
        const call = client.prepare({pipeline, jobName});
        return await call.response;
    }

    private async callRun(client: IJobServiceClient, preparationId: string) {
        const call = client.run({preparationId, retrievalToken: ''});
        return await call.response;
    }
}