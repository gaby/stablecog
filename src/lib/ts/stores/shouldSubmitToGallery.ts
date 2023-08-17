import { writable as writableLocal } from 'svelte-local-storage-store';

export const shouldSubmitToGallery = writableLocal<boolean | null>('shouldSubmitToGallery', null);
