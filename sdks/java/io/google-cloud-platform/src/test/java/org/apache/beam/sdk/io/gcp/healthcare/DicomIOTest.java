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
package org.apache.beam.sdk.io.gcp.healthcare;

import org.apache.beam.sdk.testing.PAssert;
import org.apache.beam.sdk.testing.TestPipeline;
import org.apache.beam.sdk.transforms.Create;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

@RunWith(JUnit4.class)
public class DicomIOTest {
  @Rule public final transient TestPipeline pipeline = TestPipeline.create();

  @Test
  public void test_Dicom_failedMetadataRead() {
    String badWebPath = "foo";

    DicomIO.ReadStudyMetadata.Result retrievedData;
    retrievedData = pipeline.apply(Create.of(badWebPath)).apply(DicomIO.readStudyMetadata());

    PAssert.that(retrievedData.getReadResponse()).empty();

    PAssert.that(retrievedData.getFailedReads())
        .satisfies(
            (errors) -> {
              Assert.assertTrue(errors.iterator().hasNext());
              return null;
            });

    pipeline.run();
  }
}
