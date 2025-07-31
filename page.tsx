"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ExternalLink, Palette, Gamepad2, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IllustratorHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-orange-200">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-purple-800">イラストレーター</h1>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() =>
                  document.getElementById("illustrations")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
              >
                イラスト
              </button>
              <button
                onClick={() => document.getElementById("games")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
              >
                ゲーム
              </button>
              <button
                onClick={() =>
                  document.getElementById("other-works")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
              >
                その他の作品
              </button>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
              >
                お問い合わせ
              </button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-purple-700">
                メニュー
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="メインイラスト"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-200/30"></div>
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-8">
            創造の世界へ
            <br />
            ようこそ
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-400/80 to-pink-400/80 hover:from-purple-500/80 hover:to-pink-500/80 text-white px-8 py-3 rounded-full backdrop-blur-sm"
            onClick={() =>
              document.getElementById("illustrations")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            作品を見る
          </Button>
        </div>
      </section>

      {/* Illustrations Section */}
      <section id="illustrations" className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-4xl font-bold text-purple-800">イラスト</h3>
            </div>
            <p className="text-purple-600 text-lg">キャラクターデザインから風景画まで、多彩な表現をお楽しみください</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="bg-white/40 backdrop-blur-sm border-white/30 hover:bg-white/50 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&query=pastel illustration artwork ${i}`}
                      alt={`イラスト作品 ${i}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">作品タイトル {i}</h4>
                    <p className="text-sm text-purple-600">デジタルイラスト • 2024</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 px-4 bg-white/20 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Gamepad2 className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-4xl font-bold text-purple-800">ゲーム</h3>
            </div>
            <p className="text-purple-600 text-lg">ゲーム開発プロジェクトでのアートワークとキャラクターデザイン</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className="bg-white/40 backdrop-blur-sm border-white/30 hover:bg-white/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=350&query=game artwork screenshot ${i}`}
                      alt={`ゲーム作品 ${i}`}
                      width={350}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2 text-xl">ゲームプロジェクト {i}</h4>
                  <p className="text-purple-600 mb-4">
                    このプロジェクトでは、キャラクターデザインとUI要素のアートワークを担当しました。
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 text-purple-700 hover:bg-purple-100 bg-transparent"
                  >
                    詳細を見る
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Works Section */}
      <section id="other-works" className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-4xl font-bold text-purple-800">その他の作品</h3>
            </div>
            <p className="text-purple-600 text-lg">コミッション作品、個人プロジェクト、実験的なアートワーク</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/40 backdrop-blur-sm border-white/30 hover:bg-white/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">コミッション</h4>
                <p className="text-purple-600 text-sm">お客様のご要望に応じたオリジナルイラストの制作</p>
              </CardContent>
            </Card>

            <Card className="bg-white/40 backdrop-blur-sm border-white/30 hover:bg-white/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">コラボレーション</h4>
                <p className="text-purple-600 text-sm">他のアーティストとの共同プロジェクト</p>
              </CardContent>
            </Card>

            <Card className="bg-white/40 backdrop-blur-sm border-white/30 hover:bg-white/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">実験的作品</h4>
                <p className="text-purple-600 text-sm">新しい技法やスタイルの探求</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white/20 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-4xl font-bold text-purple-800">お問い合わせ</h3>
            </div>
            <p className="text-purple-600 text-lg">お仕事のご依頼やご質問がございましたら、お気軽にご連絡ください</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/40 backdrop-blur-sm border-white/30">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-purple-800 mb-4">メールでのお問い合わせ</h4>
                <p className="text-purple-600 mb-6">
                  イラスト制作のご依頼、お見積もり、その他ご質問など、
                  <br />
                  何でもお気軽にお問い合わせください。
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full"
                  asChild
                >
                  <Link href="mailto:contact@example.com">
                    <Mail className="w-5 h-5 mr-2" />
                    メールを送る
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-purple-800/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="text-xl font-bold text-purple-800 mb-2">イラストレーター</h5>
              <p className="text-purple-600 text-sm">© 2025 All rights reserved.</p>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-300 text-purple-700 hover:bg-purple-100 bg-transparent"
                asChild
              >
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />X (Twitter)
                </Link>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-purple-300 text-purple-700 hover:bg-purple-100 bg-transparent"
                asChild
              >
                <Link href="https://pixiv.net" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Pixiv
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-purple-300/30 text-center">
            <p className="text-purple-600 text-sm">
              このサイトはGoogle翻訳に対応しています • This site supports Google Translate
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
