import { TLAssetStore } from 'tldraw';

export const multiplayerAssetStore: TLAssetStore = {
  async upload(_asset, file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload asset');
    }

    const data = await response.json();
    return data.url;
  },

  resolve(asset) {
    return asset.props.src;
  },
};
