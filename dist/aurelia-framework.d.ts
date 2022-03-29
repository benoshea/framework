// Generated by dts-bundle-generator v6.5.0

import { Container } from 'aurelia-dependency-injection';
import { Loader } from 'aurelia-loader';
import { ViewResources } from 'aurelia-templating';

export interface FrameworkPluginInfo {
	moduleId?: string;
	resourcesRelativeTo?: string[];
	configure?: (config: FrameworkConfiguration, pluginConfig?: any) => any;
	config?: any;
}
export declare class FrameworkConfiguration {
	container: Container;
	aurelia: Aurelia;
	constructor(aurelia: Aurelia);
	instance(type: any, instance: any): FrameworkConfiguration;
	singleton(type: any, implementation?: Function): FrameworkConfiguration;
	transient(type: any, implementation?: Function): FrameworkConfiguration;
	preTask(task: Function): FrameworkConfiguration;
	postTask(task: Function): FrameworkConfiguration;
	feature(plugin: string | ((config: FrameworkConfiguration, pluginConfig?: any) => any), config?: any): FrameworkConfiguration;
	globalResources(resources: string | Function | Array<string | Function>): FrameworkConfiguration;
	globalName(resourcePath: string, newName: string): FrameworkConfiguration;
	plugin(plugin: string | ((frameworkConfig: FrameworkConfiguration) => any) | FrameworkPluginInfo, pluginConfig?: any): FrameworkConfiguration;
	defaultBindingLanguage(): FrameworkConfiguration;
	router(): FrameworkConfiguration;
	history(): FrameworkConfiguration;
	defaultResources(): FrameworkConfiguration;
	eventAggregator(): FrameworkConfiguration;
	basicConfiguration(): FrameworkConfiguration;
	standardConfiguration(): FrameworkConfiguration;
	developmentLogging(level?: string): FrameworkConfiguration;
	apply(): Promise<void>;
}
export declare class Aurelia {
	host: Element;
	loader: Loader;
	container: Container;
	resources: ViewResources;
	use: FrameworkConfiguration;
	constructor(loader?: Loader, container?: Container, resources?: ViewResources);
	start(): Promise<Aurelia>;
	enhance(bindingContext?: object, applicationHost?: string | Element): Promise<Aurelia>;
	setRoot(root?: string | Function, applicationHost?: string | Element): Promise<Aurelia>;
}
export * from "aurelia-dependency-injection";
export * from "aurelia-binding";
export * from "aurelia-metadata";
export * from "aurelia-templating";
export * from "aurelia-loader";
export * from "aurelia-task-queue";
export * from "aurelia-path";
export * from "aurelia-pal";

export {
	TheLogManager as LogManager,
};

export {};
