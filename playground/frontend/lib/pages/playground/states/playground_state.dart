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

import 'package:flutter/material.dart';
import 'package:playground/modules/examples/models/example_model.dart';
import 'package:playground/modules/sdk/models/sdk.dart';

class PlaygroundState with ChangeNotifier {
  SDK _sdk;
  ExampleModel? _selectedExample;
  String _source = "";

  PlaygroundState([this._sdk = SDK.java, this._selectedExample]);

  ExampleModel? get selectedExample => _selectedExample;

  SDK get sdk => _sdk;

  String get source => _source;

  setExample(ExampleModel example) {
    _selectedExample = example;
    _source = example.sources[_sdk] ?? "";
    notifyListeners();
  }

  setSdk(SDK sdk) {
    _sdk = sdk;
    notifyListeners();
  }

  setSource(String source) {
    _source = source;
  }

  @override
  String toString() {
    return 'PlaygroundState{_sdk: $_sdk, _selectedExample: $_selectedExample}';
  }
}