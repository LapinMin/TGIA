<h1 align="center">🚑<strong> findER </strong>🚑</h1>

<div align="center">
  <strong>2023년 제 17회 공개SW 개발자대회</strong>
  <br><br>
  <em>실시간 응급실 정보 제공 서비스 애플리케이션, findER</em>
  <br><br>
  <em>written by LapinMin</em>
</div>

## 🔖 목차
- 개발배경 및 목적
- 주요 기능
- 기술 스택
- 시스템 구조도
- 팀원 및 담당 파트
- 시연 영상

## 📍 개발 배경 및 목적
기존의 중고 거래 방식에서는 물품의 하자, 사기 배송, 직거래 시 폭력이나 협박과 같은
범죄에 노출될 가능성이라는 우려 요소가 있었습니다. 또한, 학부 생활을 위해 필요한 교재나 물
품을 구하기 위해서는 교내 서점이나 이미 사용한 중고 물품의 거래가 가장 좋은 선택일 수 있다
는 사실을 고려하였습니다. 이러한 배경과 필요성을 조합하여, 학부생들이 필요로 하는 교재 및
물품을 보다 쉽게 찾고 판매할 수 있는 중고 거래 시장을 개발하는 프로젝트가 진행되었습니다.<br>
이 프로젝트의 목표는 학부생들이 안전하고 신뢰할 수 있는 중고 거래 환경을 제공하는
것입니다. 우리는 부기마켓 애플리케이션과 관리자 웹 페이지를 통해 학부생들이 원하는 교재 및
물품을 쉽게 찾을 수 있도록 하고, 판매자들도 간편하게 물품을 등록하고 거래할 수 있도록
지원합니다. 이를 통해 학부생들은 안전하고 신뢰성 있는 거래를 할 수 있으며, 필요한 물품을
더욱 용이하게 구할 수 있습니다.<br>

## 🎯 주요 기능
> ### 중고 물품 판매 게시글 목록 조회
<details>
  <summary><b>화면 보기</b></summary>
  <br>
  <div>
    <img
      width="325"
      height="720" alt=""
      src="https://github.com/LapinMin/findER-frontend/assets/130971355/18abe7da-3cd8-4482-9028-4b0d3ed7d9c5"
    >
    <br><br>
  </div>
</details>

> ### 학부 소속에 맞춘 게시글 목록 필터링 조회
<details>
  <summary><b>화면 보기</b></summary>
  <br>
  <img 
    width="325" 
    height="720" alt="" 
    src="https://github.com/LapinMin/findER-frontend/assets/130971355/8e342f32-ce01-4a9b-8044-1564053c7c58"
  >
    <br><br>
  </div>
</details>

> ### 중고 물품 게시글 작성 및 조회 기능
<details>
  <summary><b>화면 보기</b></summary>
  <br>
  <img 
    width="325" 
    height="720" 
    alt=""
    src="https://github.com/LapinMin/findER-frontend/assets/130971355/92b28e36-da1c-43a3-a361-e405f1ba30d2"><br>
  <strong>[게시글 작성 화면]</strong><br>
    <img 
    width="325" 
    height="720" 
    alt=""
    src="https://github.com/LapinMin/findER-frontend/assets/130971355/f70db984-c4f8-4d33-96ca-0fdb8c4c16a1"><br>
  <strong>[게시글 조회 화면]</strong>
  <br><br>
  </div>
</details>


> ### 키워드 검색 및 실시간 인기 검색어 제공 기능
<details>
  <summary><b>화면 보기</b></summary>
  <br>
  <img 
    width="325" 
    height="720" 
    alt=""
    src="https://github.com/LapinMin/findER-frontend/assets/130971355/8df858d2-2751-4a9f-b099-92176d960582">
    <br><br>
  </div>
</details>

> ### 구매 희망자와 판매자 간의 실시간 채팅 기능
<details>
  <summary><b>화면 보기</b></summary>
  <strong>실시간 채팅, 거래 예약, 현재 위치 교내 여부 전송,<br>카카오페이 외부 API 연동을 통한 간편 결제 기능 제공</strong>
  <br>
  <img 
    width="325" 
    height="720" 
    alt=""
    src="https://github.com/LapinMin/findER-frontend/assets/130971355/eb548409-b224-4d05-974f-47827ba4d8ea">
  <br><br>
</details>

> ### 거래 후 구매 후기 작성
<details>
  <summary><b>화면 보기</b></summary>
  <br>
  <img 
    width="325" 
    height="720" 
    alt=""
    src="https://github.com/LapinMin/findER-frontend/assets/130971355/b5495902-4466-4307-ad28-101f8b9ce60f">
  <br><br>
</details>

> ### 관리자 전용 서비스 통계 조회 웹사이트
<details>
  <summary><b>화면 보기</b></summary>
  <br>
  <img 
    width="325" 
    height="720" 
    alt=""
    src="https://github.com/LapinMin/findER-frontend/assets/130971355/f2707ae2-9094-4273-aefa-72a923c70fae">
  <br><br>
</details>



## 📌 기술 스택
<div>
    <table>
        <tr>
            <td colspan="2" align="center">
                Language
            </td>
            <td colspan="4">
                <img src="https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white">
                <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=openjdk&logoColor=white">
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                Library & Framework
            </td>
            <td colspan="4">
                <img src="https://img.shields.io/badge/React_Native-61dafb?style=for-the-badge&logo=React&logoColor=black">
                <img src="https://img.shields.io/badge/spring boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                API
            </td>
            <td colspan="4">
                <img src="https://img.shields.io/badge/Kakao Pay API-FFCD00?style=for-the-badge&logo=kakao&logoColor=black"> 
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                Server
            </td>
            <td colspan="4">
                <img src="https://img.shields.io/badge/amazon ec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> 
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                Database
            </td>
            <td colspan="4">
              <img src="https://img.shields.io/badge/mysql-4479a1?style=for-the-badge&logo=mySQL&logoColor=white">
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                Tool
            </td>
            <td colspan="4">
                <img src="https://img.shields.io/badge/intellij idea-000000?style=for-the-badge&logo=intellijidea&logoColor=white">
                <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                etc.
            </td>
            <td colspan="4">
                <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
                <img src="https://img.shields.io/badge/jira-0a75dd?style=for-the-badge&logo=jira&logoColor=white">
            </td>
        </tr>
    </table>
</div>

## 🖻 시스템 구조도
<img width="895" alt="image" src="https://github.com/LapinMin/TGIA/assets/130971355/fb04da65-6c02-449e-b3f1-0db2268eb9f9">

> React Native 애플리케이션 : 중고 거래 모바일 어플리케이션 <br>
> React 웹페이지 : 서비스 관리자 전용 통계 조회 웹 어플리케이션 <br>
? 백엔드 애플리케이션 : 모바일 애플리케이션의 백엔드 어플리케이션 <br>
> Yolov5 애플리케이션 : 게시글 작성시 상품 카테고리 추천을 위한 딥러닝 AI 어플리케이션<br>

## 👩‍👩‍👧‍👦 팀원 및 담당 파트
<div sytle="overflow:hidden;">
<table>
   <tr>
      <td colspan="2" align="center"><strong>Front-End Developer</strong></td>
      <td colspan="2" align="center"><strong>Back-End Developer</strong></td>
   </tr>
  <tr>
     <td align="center">
        <a href="https://github.com/LapinMin"><img src="https://avatars.githubusercontent.com/u/130971355?v=4" width="150px" alt="민건희"/><br/><sub><b>민건희(팀장)</b></sub></a>
     </td>
    <td align="center">
        <a href="https://github.com/BraveKey"><img src="https://avatars.githubusercontent.com/u/125978827?v=4" width="150px;" alt="조용기"/><br/><sub><b>조용기</b></sub></a>
    </td>
     <td align="center">
        <a href="https://github.com/MKSonny"><img src="https://avatars.githubusercontent.com/u/116620246?v=4" width="150px" alt="손민규"/><br/><sub><b>손민규</b></sub></a>
     </td>
     <td align="center">
        <a href="https://github.com/dudtlr"><img src="https://avatars.githubusercontent.com/u/95243456?v=4" width="150px" alt="전영식"/><br/><sub><b>전영식</b></sub></a>
     </td>
  <tr>
</table>
</div>

> 민건희 : React Native 사용 모바일 애플리케이션 공동 개발 / 모바일 애플리케이션 디자인 / 팀장 <br>
> 손민규 : Spring Boot 사용 백엔드 애플리케이션 공동 개발 / Yolov5 사용 딥러닝 애플리케이션 개발 <br>
> 전영식 : Spring Boot 사용 백엔드 애플리케이션 공동 개발 / 카카오페이 외부 API 연동을 통한 간편결제 기능 개발 <br>
> 조용기 : React Native 사용 모바일 애플리케이션 공동 개발 / React 사용 관리자 통계 조회 웹사이트 개발 <br>

