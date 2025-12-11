export default {
  namespace: "API",
  schemaPath: "./openapi.json",
  declareType: "interface",
  serversPath: "./servers",
  requestLibPath: "import request, { RequestOptions } from '@/utils/request';",
  customClassName: (tagName) => {
    console.log("customClassName", tagName);
    return tagName;
  },
  //   customType: (typeName: any) => {
  //     console.log('customTypeImports', typeName);
  //     return typeName;
  //   },
  //   customFileNames: (operationObject: any, apiPath: any, _apiMethod: any) => {
  //     console.log('customFileNames', operationObject, apiPath, _apiMethod);
  //     return operationObject['x-swagger-router-controller']
  //       ? [operationObject['x-swagger-router-controller']]
  //       : operationObject.tags || [operationObject.operationId] || [
  //         apiPath.replace('/', '').split('/')[1],
  //       ];
  //   }
  // }
};
