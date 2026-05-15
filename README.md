# Pantone Korea Main + SHOP Test

운영 중인 Cafe24 스킨에 바로 적용하기 전, pantone.com의 메인/SHOP 구조를 기준으로 만든 테스트용 정적 HTML 샘플입니다.

## 파일 구조

```text
pantone-kr-main-shop-test/
├─ index.html
├─ assets/
│  ├─ css/style.css
│  └─ js/main.js
└─ docs/structure-map.md
```

## 리뷰 포인트

1. 메인 첫 화면의 구조가 본사 톤과 맞는지
2. SHOP 카테고리 순서와 한국어명이 맞는지
3. Cafe24 메인에 섹션 단위로 이식 가능한지
4. 모바일에서 메뉴와 카드가 자연스러운지
5. 실제 상품 이미지/배너로 교체할 위치가 명확한지

## GitHub 업로드 기본 명령어

```bash
git init
git add .
git commit -m "Add main and shop layout test"
git branch -M main
git remote add origin https://github.com/USER/REPOSITORY.git
git push -u origin main
```

## Cafe24 적용 전 주의

- 운영 스킨에 바로 넣지 말고 복사한 테스트 스킨에서 확인합니다.
- 상품목록, 장바구니, 결제, 로그인 모듈은 삭제하거나 대체하지 않습니다.
- 이 파일의 제품 카드는 실제 Cafe24 상품 모듈 연결 전 레이아웃 확인용입니다.
