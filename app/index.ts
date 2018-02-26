// Modules
declare var exports: any;

exports.handler = function (event: any, context: any, callback?: Function): void {
  callback(
    null,
    { statusCode: 200, headers: {}, body: '' }
  );
}
