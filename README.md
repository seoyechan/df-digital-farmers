# DF · Digital Farmers

DFsolution의 브랜드 레퍼런스 홈페이지. 제안 표기: DF · Digital Farmers. 기존 DFsolution 명칭은 푸터에 유지했습니다.

## 로컬 실행

`python3 -m http.server 4173 --directory dist`

빌드나 설치가 필요 없는 HTML, CSS, JavaScript로 구성되어 있습니다.

## 디자인

- 럭셔리 에디토리얼 방향의 디지털 프로덕트 스튜디오.
- DESIGN_VARIANCE 7 / MOTION_INTENSITY 5 / VISUAL_DENSITY 3.
- Forest 팔레트: 연한 그린 페이퍼 + 딥 그린. 시스템/수동 라이트·다크 테마.
- Georgia의 세리프와 한국어 시스템 산세리프. 직각 이미지, 얇은 구분선, 비대칭 서비스 배치.
- 진입 모션은 정보 순서를 드러내고, 호버는 클릭 가능성을 알립니다. reduced-motion 지원.
- 레이어: 콘텐츠 기본, skip link 3, 모달은 브라우저 top layer.

## 확인된 연결과 남은 운영 정보

- 월급루팡: 기존 프로젝트의 실제 주소 `https://loopang.cloud/` 및 개인정보처리방침 연결.
- ondo: 기존 캐릭터와 확인된 기능 소개. 실제 공개 주소가 확인되지 않아 소개 모달 제공.
- 문의: 기존 월급루팡 개인정보처리방침에 기재된 `digfarmcom@gmail.com`.
- 정책 안내는 문서 허브입니다. ondo 개인정보처리방침과 서비스 이용약관은 게시 준비 상태이며 법률 문서 초안을 임의로 확정하지 않았습니다.
- 이 사이트 소스는 추적, 쿠키, 로컬 저장소를 사용하지 않습니다. 호스팅 측 처리는 별도입니다.

## 이미지

- `dist/assets/cultivate.jpg`: 내장 image_gen 도구 생성, 웹용 JPEG로 최적화.
- 생성 프롬프트: “Use case: photorealistic-natural. Asset type: wide homepage hero photograph for a luxury editorial digital product studio called Digital Farmers. Create an exquisite real still-life photograph of a slender young olive branch with very few dark green leaves emerging from a small irregular charcoal stone vessel, resting on a monolithic pale limestone plinth. Warm ivory plaster studio background, dramatic but soft late-afternoon light from the left, elegant long shadow toward the right, fine natural stone texture and delicate film grain. Botanical, architectural, contemplative, extremely refined Italian design magazine art direction. Landscape 3:2 composition. Subject in the central-right half, substantial uncluttered background; show full branch and plinth. Earthy warm ivory, muted olive, brown-black. No text, no logos, no interface, no border. Photo for an independent digital studio with the metaphor of cultivating useful ideas.”
- `dist/assets/loopang.png`, `dist/assets/ondo.png`: 사용자 기존 프로젝트의 캐릭터 이미지.
