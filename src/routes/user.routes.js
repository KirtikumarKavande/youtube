import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  logOutUser,
  loginUser,
  refreshToken,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import auth from "../middlewares/auth.middleware.js";

const router = Router();

// router.post("/register",registerUser)
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),

  registerUser
);
router.route("/login").post(loginUser);

//protected routes

router.route("/logout").get(auth.auth, logOutUser);
router.route("/refresh-token").post(refreshToken);
router.route("/change-password").post(auth.auth, changeCurrentPassword);
router.route("/current-user").get(auth.auth, getCurrentUser);
router.route("/update-account").patch(auth.auth, updateAccountDetails);
router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("/coverImage"), updateUserCoverImage);

export default router;
