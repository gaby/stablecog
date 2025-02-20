import {
	flatGuideSidebarShallow,
	entries,
	guideSidebar,
	previewBaseUrl
} from '$docroutes/guide/constants';
import { getEntryFromPathname, getSidebarItemFromPathname } from '$components/docs/helpers';
import type { ServerLoad } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url }) => {
	const entry = await getEntryFromPathname({
		flatSidebarShallow: flatGuideSidebarShallow,
		rawEntries: entries,
		previewBaseUrl: previewBaseUrl,
		pathname: url.pathname
	});
	const { sidebarItem, parentItem } = getSidebarItemFromPathname({
		sidebarItem: guideSidebar,
		pathname: url.pathname
	});
	if (!entry) {
		return error(404, 'Not found');
	}
	return {
		metadata: entry.metadata,
		content: entry.default,
		sidebarItem,
		parentItem
	};
};
