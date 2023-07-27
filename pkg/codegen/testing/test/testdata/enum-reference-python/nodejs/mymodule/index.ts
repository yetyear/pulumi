// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { IamResourceArgs } from "./iamResource";
export type IamResource = import("./iamResource").IamResource;
export const IamResource: typeof import("./iamResource").IamResource = null as any;
utilities.lazyLoad(exports, ["IamResource"], () => require("./iamResource"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "example:myModule:IamResource":
                return new IamResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("example", "myModule", _module)
