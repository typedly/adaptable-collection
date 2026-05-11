// Interface & Type.
import type { AdaptableCollectionShape } from './adaptable-collection.shape';
import type { AnyIterable, AnyIterableElement } from '@typedly/iterable';
import type { CollectionAdapterShape } from '@typedly/collection';
import type { ConstrainedConstructor } from '@typedly/constructor';
import type { InferAsyncOf } from '@typedly/data';
/**
 * @description Adaptable collection constructor, defining how to create instances of adaptable collections.
 * @export
 * @interface AdaptableCollectionConstructor
 * @template {AdaptableCollectionShape<A, T, E, S>} I The adaptable collection shape, defining the structure and behavior of the collection to be constructed.
 * @template {CollectionAdapterShape<T, E, S> | undefined} A Collection adapter shape, defining how the collection adapts to different data sources or configurations.
 * @template {AnyIterable<E>} T The collection type, defining its structure and behavior.
 * @template [E=AnyIterableElement<T>] The element type, inferred from the collection type if not provided.
 * @template {boolean} [S=InferAsyncOf<[I, A]>] Whether the collection is asynchronous, inferred from the shape and adapter if not provided.
 * @extends {ConstrainedConstructor<AdaptableCollectionShape<A, T, E, S>, I, [A, I, ...E[]]>}
 */
export interface AdaptableCollectionConstructor<
  I extends AdaptableCollectionShape<A, T, E, S>,
  A extends CollectionAdapterShape<T, E, S> | undefined,
  T extends AnyIterable<E>,
  E = AnyIterableElement<T>,
  S extends boolean = InferAsyncOf<[I, A]>,
> extends ConstrainedConstructor<
  AdaptableCollectionShape<A, T, E, S>,
  I,
  [A, I, ...E[]]
>{}
