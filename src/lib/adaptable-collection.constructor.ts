// Interface.
import type { AdaptableCollectionShape } from './adaptable-collection.shape';
import type { CollectionSettings } from '@typedly/collection';
import type { ConfigurableCollectionAdapter } from '@typedly/configurable-collection';
// Type.
import type { ConstrainedConstructor } from '@typedly/constructor';
import type { InferAsyncOf } from '@typedly/data';
import type { InferCollectionAdapter } from './infer-collection-adapter.type';
import type { InferCollectionType, InferElementFromSettings } from '@typedly/collection';
import type { InferSettings } from '@typedly/configurable-data';
/**
 * @description The constructor type for `AdaptableCollectionShape`, which defines the structure for creating instances of adaptable collections that can adapt to different collection shapes and settings.
 * @export
 * @interface AdaptableCollectionConstructor
 * @template {AdaptableCollectionShape<A, C, T, E, R>} [S=InferCollectionAdapter<S>] The type of adaptable collection, inferred from the collection adapter specified in the adaptable collection shape.
 * @template {ConfigurableCollectionAdapter<C, T, E, R>} [A=InferCollectionAdapter<S>] The type of the collection adapter, inferred from the adaptable collection shape or defaults to `ConfigurableCollectionAdapter` if it cannot be inferred.
 * @template {CollectionSettings<T, E, R>} [C=InferSettings<S>] The collection settings type, inferred from the adaptable collection shape or the collection adapter, which defines the configuration for the collection.
 * @template [E=InferElementFromSettings<C>] The type of elements in the collection, inferred from the collection settings.
 * @template {Iterable<E>} [T=InferCollectionType<C>] The type of the iterable collection, inferred from the collection settings.
 * @template {boolean} [R=InferAsyncOf<[C, A]>] The type indicating whether the collection is asynchronous, inferred from the collection settings and adapter.
 * @extends {ConstrainedConstructor<AdaptableCollectionShape<A, C, T, E, R>, S, [C, A, S, ...E[]]>}
 */
export interface AdaptableCollectionConstructor<
  S extends AdaptableCollectionShape<A, C, T, E, R>,
  A extends ConfigurableCollectionAdapter<C, T, E, R> = InferCollectionAdapter<S>,
  C extends CollectionSettings<T, E, R> = InferSettings<S>,
  E = InferElementFromSettings<C>,
  T extends Iterable<E> = InferCollectionType<C>,
  R extends boolean = InferAsyncOf<[C, A]>,
> extends ConstrainedConstructor<
  AdaptableCollectionShape<A, C, T, E, R>,
  S,
  [C, A, S, ...E[]]
>{}
