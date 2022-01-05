import { RemoteJobServiceClient } from "./client";

class PythonDirectRunner {
    client: RemoteJobServiceClient;

    constructor(client: RemoteJobServiceClient) {
        this.client = client;
    }
}