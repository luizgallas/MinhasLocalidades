import { action } from 'typesafe-actions';

export function enableLoader({loader}: {loader: boolean}) {
    return action('ENABLE_LOADER', { loader })
};

