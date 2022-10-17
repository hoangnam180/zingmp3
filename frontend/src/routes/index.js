import { default as config } from '~/config/routes';
import Category from '~/pages/Category';
import Follow from '~/pages/Follow';
import Mv from '~/pages/Mv';
import NewMusic from '~/pages/NewMusic';
import Radio from '~/pages/Radio';
import ZingChart from '~/pages/ZingChart';
import Top100 from '~/pages/Top100/index';
import MyMusic from '~/pages/MyMusic';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import Albums from '~/pages/Album';
import Song from '~/pages/MyMusic/Song';
import PodCast from '~/pages/MyMusic/Podcast';
import Album from '~/pages/MyMusic/Album';
import MyMusicMv from '~/pages/MyMusic/MyMusicMv';

// Public routes
const publicRoutes = [
    { path: config.index, component: Home },
    { path: config.home, component: Home },
    {
        path: config.my_music,
        component: MyMusic,
        children: [
            { index: true, path: null, component: Song },
            { path: 'song', component: Song },
            { path: 'podcast', component: PodCast },
            { path: 'album', component: Album },
            { path: 'mymusicmv', component: MyMusicMv },
        ],
    },
    { path: config.zing_chart, component: ZingChart },
    { path: config.radio, component: Radio },
    { path: config.follow, component: Follow },
    { path: config.newmusic, component: NewMusic },
    { path: config.category, component: Category },
    { path: config.top100, component: Top100 },
    { path: config.mv, component: Mv },
    { path: config.album, component: Albums, children: [{ path: ':id', component: Albums }] },
    { path: '*', component: NotFound },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
