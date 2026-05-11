// Interface & Type.
import type { AdaptableConfigurableDataShape } from '@typedly/adaptable-data';
import type { AnyIterable, AnyIterableElement } from '@typedly/iterable';
import type { CollectionConfig, CollectionSettings } from '@typedly/collection';
import type { ConfigurableCollectionAdapter, ConfigurableCollectionShape } from '@typedly/configurable-collection';
import type { InferAsyncOf } from '@typedly/data';
import type { InferCollectionType } from '@typedly/collection';
/**
 * @description Adaptable configurable collection shape, combining adaptable configurable data and configurable collection shapes.
 * @export
 * @interface AdaptableConfigurableCollectionShape
 * @template {ConfigurableCollectionAdapter<C, T, E, S> | undefined} A Collection adapter shape, defining how the collection adapts to different data sources or configurations.
 * @template {CollectionSettings<T, E, S>} C The collection settings, defining its behavior and structure.
 * @template {AnyIterable<E>} [T=InferCollectionType<C, A>] The collection type, inferred from the settings and adapter if not provided.
 * @template [E=AnyIterableElement<T>] The element type, inferred from the collection type if not provided.
 * @template {boolean} [S=InferAsyncOf<[C, A]>] Whether the collection is asynchronous, inferred from the settings and adapter if not provided.
 * @extends {AdaptableConfigurableDataShape<A, C, T, S>}
 * @extends {ConfigurableCollectionShape<C, T, E, S>}
 */
export interface AdaptableConfigurableCollectionShape<
  A extends ConfigurableCollectionAdapter<C, T, E, S> | undefined,
  C extends CollectionSettings<T, E, S>,
  T extends AnyIterable<E> = InferCollectionType<C, A>,
  E = AnyIterableElement<T>, 
  S extends boolean = InferAsyncOf<[C, A]>
> extends
  AdaptableConfigurableDataShape<A, C, T, S>,
  ConfigurableCollectionShape<C, T, E, S> {
  /**
   * @description The configuration settings for the collection, defining its behavior and structure.
   * @type {CollectionConfig<C, T, E, S>}
   */
  configuration: CollectionConfig<C, T, E, S>;

  /**
   * @description Updates the collection's configuration settings and returns a new collection instance with the updated settings.
   * @template {C} NC The new configuration type.
   * @template {ConfigurableCollectionAdapter<NC, T, E, S>} NA The new adapter type.
   * @param {NC} settings The new configuration settings for the collection.
   * @returns {AdaptableConfigurableCollectionShape<NA, NC, T, E, S>}
   */
  with?<NC extends CollectionSettings<T, E, S>, NA extends ConfigurableCollectionAdapter<NC, T, E, S>>(
    settings: Partial<NC>
  ): AdaptableConfigurableCollectionShape<NA, NC, T, E, S>;
}
