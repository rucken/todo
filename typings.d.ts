// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

// tslint:disable
declare var require: any;
declare const System: any;
declare var node: any;
declare const ENV: string;
// google code-prettify
declare const PR: any;

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}