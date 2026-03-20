// Interface
import type { AdaptableCollectionShape } from "./adaptable-collection.shape";
import type { ConfigurableCollectionAdapter } from "@typedly/configurable-collection";
/**
 * @description A utility type that infers the collection adapter type from a given adaptable collection shape.
 * If the adaptable collection shape specifies a collection adapter, it will be inferred; otherwise, it defaults to `ConfigurableCollectionAdapter` with generic parameters.
 * @export
 * @template S 
 */
export type InferCollectionAdapter<S> =
  S extends AdaptableCollectionShape<infer U, any, any, any, any> ? U : ConfigurableCollectionAdapter<any, any, any, any>;