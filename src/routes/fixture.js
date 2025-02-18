import express from 'express';
import user from '../controllers/User';
import fixtures from '../controllers/Fixture';

const router = express.Router();
router.post('/', fixtures.addChecker, user.checkToken, fixtures.add);
router.get('/view', fixtures.idChecker, user.checkToken, fixtures.viewOne);
router.get('/all', user.checkToken, fixtures.viewAll);
router.get('/:status', fixtures.statusChecker, user.checkToken, fixtures.filter);
router.delete('/', fixtures.idChecker, user.checkToken, fixtures.delete);
router.patch('/:id', fixtures.paramChecker, fixtures.addChecker, user.checkToken, fixtures.change);
// view get
// change patch
// delete
export default router;
