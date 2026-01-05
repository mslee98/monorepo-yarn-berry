# monorepo

# Git 브랜치 전략

이 문서는 **Design System + Project A + Project B** 구조의 monorepo에서 사용하는
**Git 브랜치 전략만** 간단히 정리한 가이드입니다.

---

## 핵심 원칙

* 브랜치는 **repo 단위로 하나의 전략만 사용**한다
* 패키지(프로젝트)별로 `main / develop` 브랜치를 만들지 않는다
* 변경 범위는 **패키지**, 흐름 제어는 **브랜치**가 담당한다
* 패키지별 릴리즈는 **브랜치가 아니라 태그**로 관리한다

> 브랜치 = 흐름 제어 / 패키지 = 영향 범위

---

## 브랜치 구성 (Repo 공통)

```text
main        # 항상 배포 가능한 상태 (protected)
develop     # 통합 테스트 / 스테이징용 (선택)
feature/*   # 기능 개발
hotfix/*    # 긴급 수정
```

* 모든 PR은 `main` 또는 `develop`으로 병합
* `release/*` 브랜치는 사용하지 않거나 최소화

---

## Feature 브랜치 네이밍 규칙

패키지 스코프를 브랜치 이름에 명시한다.

```text
feature/design-button
feature/project-a-login
feature/project-b-dashboard
```

→ 브랜치 이름만 보고 영향 패키지를 알 수 있어야 한다.

---

## develop 브랜치 사용 기준 (선택)

* develop은 **프로젝트 전용 브랜치가 아님**
* 다음 릴리즈 후보 변경사항을 모아두는 **통합 브랜치** 역할

```text
feature/* → develop → main
```

* 소규모/잦은 배포 환경에서는 develop 없이 `feature → main`도 가능

---

## 패키지별 릴리즈 방식

* 하나의 repo에서 여러 패키지를 독립적으로 릴리즈한다
* 브랜치가 아니라 **태그로 버전 관리**한다

```text
design-system@1.4.0
project-a@2.1.0
project-b@0.9.3
```

---

## 한 줄 요약

> **Monorepo에서는 Gitflow를 그대로 쓰지 않는다.
> 브랜치는 단순하게, 릴리즈는 패키지 단위로 관리한다.**
