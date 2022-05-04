# nextjs-todo-list

Next.js で TODO リストを作ってみた

## 使用技術

- Next.js (React)
- TypeScript
- Recoil
- localStorage（データの永続化）

## ディレクトリ構成

| ディレクトリ名              | 内容                                           |
| --------------------------- | ---------------------------------------------- |
| components                  | 小さくて汎用性の高いコンポーネント             |
| pages                       | 各ページに依存するコンポーネント               |
| repositories                | 外部とやり取りするモジュールのインターフェース |
| repositories/implementation | 実際に外部とやり取りする処理を書いたモジュール |
| store                       | グローバルステート                             |
| types                       | グローバルの型定義                             |

## 学んだこと

- React + Hooks で関数コンポーネントを定義する方法
- Recoil の基本的な使い方
- Recoil で非同期で初期値を読み込む方法
- Next.js のローカル開発方法
- クリーンアーキテクチャっぽい Repository の書き方
- Container / Presentational の実装方法
- Vue.js との違い
- Tailwind CSS でクラス名が長くなる問題の対処方法

## まだわかっていないこと

- React, Next.js, Recoil のベストプラクティス
- テストの書き方
  - Testing Library という名前は聞いたことがある
  - Jest でどう書くのかわかってない
- メモ化
  - ハンドラーを指定するところで好きな値（ID とか）を渡したいときは、そのタイミングで関数を定義しなければいけない
  - → useCallback が使えない
- 複数ページの開発
  - Link コンポーネント
  - Nuxt.js で言う Layout のやりかた
- デプロイ周り
  - 今回はローカルで開発できるところまでやった
- ESLint のおすすめ設定
  - 最初から入ってると思ったら入ってなかった
- GraphQL など、React と一緒に使われることの多いライブラリ・技術
- useSWR
  - Vue.js でも学びが活かせそうだったが、localStorage には対応してなさそうだったので断念
- ローディング中の処理
  - Suspense を使うらしい
- エラーハンドリング・エラー時の表示
  - Next.js がいい感じにやってくれそうではある
- 使える Provider がもっとあるはず
  - web-vitals とか
- フォームを便利にするライブラリ
  - react-hook-form？
- 本番運用のための設定

## 参考リポジトリ

- https://github.com/alan2207/bulletproof-react
