const router = require('./index');
const { getAlbumTracks, getAlbumDetails } = require('../controllers/album');
const trycatch = require('../middleware/trycatch');

router.get('/details/:album_id', trycatch(getAlbumDetails));
router.get('/:album_id/tracks', trycatch(getAlbumTracks));

module.exports = { route: router }