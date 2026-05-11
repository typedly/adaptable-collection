// Interface & Type.
import type { AdaptableDataShape } from '@typedly/adaptable-data';
import type { AnyIterable, AnyIterableElement } from '@typedly/iterable';
import type { CollectionAdapterShape, CollectionShape } from '@typedly/collection';
import type { InferAsync } from '@typedly/data';
/**
 * @description Adaptable collection shape, combining adaptable data and collection shapes.
 * @export
 * @interface AdaptableCollectionShape
 * @template {CollectionAdapterShape<T, E, S> | undefined} A Collection adapter shape, defining how the collection adapts to different data sources or configurations.
 * @template {AnyIterable<E>} T The collection type.
 * @template [E=AnyIterableElement<T>] The element type, inferred from the collection type if not provided.
 * @template {boolean} [S=InferAsync<A>] Whether the collection is asynchronous, inferred from the adapter if not provided.
 * @extends {AdaptableDataShape<A, T, S>} Adaptable data shape, defining how the collection adapts to different data sources.
 * @extends {CollectionShape<T, E, S>} Collection shape, defining the structure and behavior of the collection.
 */
export interface AdaptableCollectionShape<
  A extends CollectionAdapterShape<T, E, S> | undefined,
  T extends AnyIterable<E>,
  E = AnyIterableElement<T>, 
  S extends boolean = InferAsync<A>
> extends AdaptableDataShape<A, T, S>, CollectionShape<T, E, S> {}