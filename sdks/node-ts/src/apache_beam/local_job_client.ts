import fs from 'fs';

import {ChannelCredentials} from '@grpc/grpc-js';
import {GrpcTransport} from '@protobuf-ts/grpc-transport';
import {JobServiceClient, IJobServiceClient} from './proto/beam_job_api.client'
import {Pipeline} from './proto/beam_runner_api';

class LocalJobClient {
    client: JobServiceClient;

    constructor(host: string) {
        const transport = new GrpcTransport({
            host,
            channelCredentials: ChannelCredentials.createInsecure(),
        });
        this.client = new JobServiceClient(transport);
    }

    async submitJob(path: string, jobName: string) {
        const file = await fs.promises.readFile(path);
        const pipeline = Pipeline.fromBinary(Uint8Array.from(file));
        const prepareResponse = await this.callPrepare(this.client, pipeline, jobName);
        const preparationId = prepareResponse.preparationId;
        const runResponse = await this.callRun(this.client, preparationId);
    }

    private async callPrepare(client: IJobServiceClient, pipeline: Pipeline, jobName: string) {
        const call = client.prepare({pipeline, jobName});
        return await call.response;
    }

    private async callRun(client: IJobServiceClient, preparationId: string) {
        const call = client.run({preparationId, retrievalToken: ''});
        return await call.response;
    }
}