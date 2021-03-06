<p align="center">
</p>

aws-lambda-node-debug
==============
Node module for debugging lambda in the VS code without docker.



* [Quick Start](#quick-start)
* [License](#licensing)

## <a name="quick-start"></a>Quick Start
1. **Install via npm:**
  ```bash
  npm install aws-lambda-node-debug --save-dev
  ```
  
  
2. **VS Code Debug Config:**
  
  ```json
{
    "version": "0.2.0",
    "configurations": [{
        "type": "node",
        "request": "launch",
        "name": "Lambda Debug",
        "cwd": "${workspaceFolder}",
        "program": "${workspaceFolder}\\hello-world\\node_modules\\aws-lambda-node-debug\\bin\\aws-lambda-node-debug",
        "args": [
            "-f",
            "lambdas/hello-world",
            "-h", 
            "handler",
            "-d",
            "lambdas/event.json"
        ]
    }]
}
```
**Arguments**
#### -f
*Required*<br>
Relative file path of the lambda function you want to invoke

#### -h
*Optional*<br>
Handler method name

#### -d
*Required*<br>
Absolute file path of the event data json file

![alt text](http://drive.google.com/uc?export=view&id=1qD4be8g0-7Oh2DmtWRt_cDLGDntI2_1S)


## <a name="licensing"></a>Licensing

aws-lambda-node-debug is licensed under the [MIT License](./LICENSE.txt).

All files located in the node_modules and external directories are externally maintained libraries used by this software which have their own licenses; we recommend you read them, as their terms may differ from the terms in the MIT License.
