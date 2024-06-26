import { useState } from "react";
import GoogleLoginButton from "../assets/google_login_button.png";
import KakaoLoginButton from "../assets/kakao_login_button.png";
import NaverLoginButton from "../assets/naver_login_button.png";
import LandingModal from "../components/landing/LandingModal";
import { LandingProvider } from "../context/LandingProvider";

const LandingPage = () => {
  // TODO: 로그인 된 상태인지 쿠키에서 가져오기
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="flex justify-center items-center w-full h-full">
      {isLogin ? (
        <LandingProvider>
          <LandingModal />
        </LandingProvider>
      ) : (
        <div className="font-nps-bold text-2xl w-1/2 m-auto text-center flex flex-col gap-3 justify-center items-center">
          <h1 className="text-dark-green mb-10">로그인 & 회원가입</h1>
          <img src={GoogleLoginButton} alt="구글 로그인 버튼" className="cursor-pointer" />
          <img src={KakaoLoginButton} alt="카카오 로그인 버튼" className="cursor-pointer" />
          <img src={NaverLoginButton} alt="네이버 로그인 버튼" className="cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
