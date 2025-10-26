import { TLAsset } from 'tldraw';

export async function getBookmarkPreview(url: string): Promise<TLAsset> {
  try {
    const response = await fetch(`/api/unfurl?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    return {
      id: url as any,
      typeName: 'asset',
      type: 'bookmark',
      meta: {},
      props: {
        src: url,
        description: data.description ?? '',
        image: data.image ?? '',
        favicon: data.favicon ?? '',
        title: data.title ?? url,
      },
    };
  } catch (error) {
    console.error('Error fetching bookmark preview:', error);
    return {
      id: url as any,
      typeName: 'asset',
      type: 'bookmark',
      meta: {},
      props: {
        src: url,
        description: '',
        image: '',
        favicon: '',
        title: url,
      },
    };
  }
}
