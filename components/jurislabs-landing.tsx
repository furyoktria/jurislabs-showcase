'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Briefcase, Heart, Search, Database, Rocket, FileSignature, Building, ChevronRight, Brain, Zap, Shield, PenTool, Menu } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function JurislabsLandingComponent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [currentStep, setCurrentStep] = useState(1)
  const [currentProcess, setCurrentProcess] = useState('')

  const handleSearch = () => {
    // Simulasi pencarian database hukum
    const mockResults = [
      { id: 1, title: 'UU No. 13 Tahun 2003 tentang Ketenagakerjaan', type: 'Undang-Undang' },
      { id: 2, title: 'Putusan MA No. 1234 K/Pdt/2022', type: 'Putusan Pengadilan' },
      { id: 3, title: 'PP No. 35 Tahun 2021 tentang PKWT, Alih Daya, Waktu Kerja dan Waktu Istirahat, dan PHK', type: 'Peraturan Pemerintah' },
    ]
    setSearchResults(mockResults)
  }

  const startProcess = (process) => {
    setCurrentProcess(process)
    setCurrentStep(1)
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const renderProcessSteps = () => {
    switch (currentProcess) {
      case 'hki':
        return renderHKISteps()
      case 'prenup':
        return renderPrenupSteps()
      case 'business':
        return renderBusinessSteps()
      case 'legal-drafter':
        return renderLegalDrafterSteps()
      default:
        return null
    }
  }

  const renderHKISteps = () => {
    const totalSteps = 4
    return (
      <div className="mt-4">
        <Progress value={(currentStep / totalSteps) * 100} className="mb-4" />
        <h3 className="text-xl font-bold mb-4">Langkah {currentStep} dari {totalSteps}</h3>
        {currentStep === 1 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Pilih Jenis HKI</h4>
            <RadioGroup defaultValue="merek" className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="merek" id="merek" />
                <Label htmlFor="merek">Merek</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paten" id="paten" />
                <Label htmlFor="paten">Paten</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hak-cipta" id="hak-cipta" />
                <Label htmlFor="hak-cipta">Hak Cipta</Label>
              </div>
            </RadioGroup>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Informasi Dasar</h4>
            <div className="space-y-2">
              <Input placeholder="Nama HKI" />
              <Textarea placeholder="Deskripsi HKI" />
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Unggah Dokumen</h4>
            <Input type="file" />
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Tinjau dan Kirim</h4>
            <p>Silakan tinjau informasi yang Anda masukkan sebelum mengirim.</p>
          </div>
        )}
        <Button onClick={nextStep} className="mt-4 bg-red-500 hover:bg-red-600">
          {currentStep < totalSteps ? 'Lanjut' : 'Kirim'} <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    )
  }

  const renderPrenupSteps = () => {
    const totalSteps = 5
    return (
      <div className="mt-4">
        <Progress value={(currentStep / totalSteps) * 100} className="mb-4" />
        <h3 className="text-xl font-bold mb-4">Langkah {currentStep} dari {totalSteps}</h3>
        {currentStep === 1 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Informasi Pasangan</h4>
            <div className="space-y-2">
              <Input placeholder="Nama Lengkap Anda" />
              <Input placeholder="Nama Lengkap Pasangan" />
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Tanggal Pernikahan</h4>
            <Input type="date" />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Harta Bersama</h4>
            <Textarea placeholder="Deskripsi harta bersama" />
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Ketentuan Khusus</h4>
            <Textarea placeholder="Masukkan ketentuan khusus jika ada" />
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Tinjau dan Setujui</h4>
            <p>Silakan tinjau perjanjian pranikah Anda sebelum menyetujui.</p>
          </div>
        )}
        <Button onClick={nextStep} className="mt-4 bg-red-500 hover:bg-red-600">
          {currentStep < totalSteps ? 'Lanjut' : 'Setujui'} <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    )
  }

  const renderBusinessSteps = () => {
    const totalSteps = 6
    return (
      <div className="mt-4">
        <Progress value={(currentStep / totalSteps) * 100} className="mb-4" />
        <h3 className="text-xl font-bold mb-4">Langkah {currentStep} dari {totalSteps}</h3>
        {currentStep === 1 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Pilih Jenis Badan Usaha</h4>
            <RadioGroup defaultValue="pt" className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pt" id="pt" />
                <Label htmlFor="pt">PT (Perseroan Terbatas)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cv" id="cv" />
                <Label htmlFor="cv">CV (Commanditaire Vennootschap)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="firma" id="firma" />
                <Label htmlFor="firma">Firma</Label>
              </div>
            </RadioGroup>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Informasi Dasar Perusahaan</h4>
            <div className="space-y-2">
              <Input placeholder="Nama Perusahaan" />
              <Input placeholder="Bidang Usaha" />
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Alamat Perusahaan</h4>
            <Textarea placeholder="Alamat lengkap perusahaan" />
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Informasi Pemegang Saham</h4>
            <div className="space-y-2">
              <Input placeholder="Nama Pemegang Saham 1" />
              <Input placeholder="Persentase Kepemilikan" type="number" />
            </div>
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Modal Dasar</h4>
            <Input placeholder="Jumlah Modal Dasar" type="number" />
          </div>
        )}
        {currentStep === 6 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Tinjau dan Kirim</h4>
            <p>Silakan tinjau informasi perusahaan Anda sebelum mengirim.</p>
          </div>
        )}
        <Button onClick={nextStep} className="mt-4 bg-red-500 hover:bg-red-600">
          {currentStep < totalSteps ? 'Lanjut' : 'Kirim'} <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    )
  }

  const renderLegalDrafterSteps = () => {
    const totalSteps = 4
    return (
      <div className="mt-4">
        <Progress value={(currentStep / totalSteps) * 100} className="mb-4" />
        <h3 className="text-xl font-bold mb-4">Langkah {currentStep} dari {totalSteps}</h3>
        {currentStep === 1 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Pilih Jenis Dokumen</h4>
            <RadioGroup defaultValue="perjanjian" className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="perjanjian" id="perjanjian" />
                <Label htmlFor="perjanjian">Perjanjian</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="surat-kuasa" id="surat-kuasa" />
                <Label htmlFor="surat-kuasa">Surat Kuasa</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pernyataan" id="pernyataan" />
                <Label htmlFor="pernyataan">Surat Pernyataan</Label>
              </div>
            </RadioGroup>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Informasi Dasar</h4>
            <div className="space-y-2">
              <Input placeholder="Judul Dokumen" />
              <Textarea placeholder="Deskripsi singkat tujuan dokumen" />
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Detail Dokumen</h4>
            <Textarea placeholder="Masukkan poin-poin utama yang ingin Anda masukkan dalam dokumen" className="h-32" />
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Tinjau dan Hasilkan</h4>
            <p>AI kami akan menghasilkan draf dokumen berdasarkan informasi yang Anda berikan. Silakan tinjau sebelum menyelesaikan.</p>
          </div>
        )}
        <Button onClick={nextStep} className="mt-4 bg-red-500 hover:bg-red-600">
          {currentStep < totalSteps ? 'Lanjut' : 'Hasilkan Dokumen'} <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <header className="bg-black bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">Jurislabs</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#tentang" className="hover:text-red-500 transition-colors">Tentang</a></li>
              <li><a href="#kontak" className="hover:text-red-500 transition-colors">Kontak</a></li>
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Akses fitur-fitur Jurislabs
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <Button className="w-full justify-start" variant="ghost" onClick={() => startProcess('hki')}>
                  <Rocket className="mr-2 h-4 w-4" />
                  Pendaftaran HKI
                </Button>
                <Button className="w-full justify-start" variant="ghost" onClick={() => startProcess('prenup')}>
                  <FileSignature className="mr-2 h-4 w-4" />
                  Perjanjian Pranikah
                </Button>
                <Button className="w-full justify-start" variant="ghost" onClick={() => startProcess('business')}>
                  <Building className="mr-2 h-4 w-4" />
                  Pendirian Usaha
                </Button>
                <Button className="w-full justify-start" variant="ghost" onClick={() => startProcess('legal-drafter')}>
                  <PenTool className="mr-2 h-4 w-4" />
                  AI Legal Drafter
                </Button>
                <hr className="border-gray-600" />
                <a href="#tentang" className="block py-2 hover:text-red-500 transition-colors">Tentang</a>
                <a href="#kontak" className="block py-2 hover:text-red-500 transition-colors">Kontak</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-gray-900 opacity-20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-100">Teknologi Hukum Berbasis AI untuk Indonesia</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Merevolusi layanan hukum dengan teknologi mutakhir dan kecerdasan buatan</p>
          <Button className="bg-red-500 hover:bg-red-600 text-white text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Mulai Sekarang
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Fitur Unggulan Kami</h2>
          <Tabs defaultValue="repository" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="repository" className="text-sm lg:text-base py-2 px-1 lg:px-4">Basis Data Hukum</TabsTrigger>
              <TabsTrigger value="ip" className="text-sm lg:text-base py-2 px-1 lg:px-4">Pendaftaran HKI</TabsTrigger>
              <TabsTrigger value="prenup" className="text-sm lg:text-base py-2 px-1 lg:px-4">Perjanjian Pranikah</TabsTrigger>
              <TabsTrigger value="business" className="text-sm lg:text-base py-2 px-1 lg:px-4">Pendirian Usaha</TabsTrigger>
              <TabsTrigger value="legal-drafter" className="text-sm lg:text-base py-2 px-1 lg:px-4">AI Legal Drafter</TabsTrigger>
            </TabsList>
            <TabsContent value="repository" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Database className="w-8 h-8 text-red-500 mr-2" />
                    Basis Data Hukum
                  </CardTitle>
                  <CardDescription>
                    Akses direktori hukum dan putusan pengadilan Indonesia yang komprehensif, ditingkatkan dengan AI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 bg-gray-700 p-6 rounded-lg shadow-lg">
                    <Input 
                      placeholder="Cari undang-undang dan putusan pengadilan..." 
                      className="w-full text-lg py-6"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button className="mt-4 bg-red-500 hover:bg-red-600 text-lg py-6 px-8" onClick={handleSearch}>
                      <Search className="w-6 h-6 mr-2" /> Cari
                    </Button>
                  </div>
                  {searchResults.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-2xl font-bold mb-4">Hasil Pencarian:</h4>
                      <ul className="space-y-4">
                        {searchResults.map((result) => (
                          <li key={result.id} className="bg-gray-700 p-4 rounded-lg shadow">
                            <span className="font-bold text-lg">{result.title}</span>
                            <span className="text-sm text-gray-400 ml-2">({result.type})</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ip" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Rocket className="w-8 h-8 text-red-500 mr-2" />
                    Pendaftaran HKI Otomatis
                  </CardTitle>
                  <CardDescription>
                    Sederhanakan proses pendaftaran hak kekayaan intelektual Anda dengan sistem otomatis kami.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-red-500 hover:bg-red-600 text-lg py-6 px-8" onClick={() => startProcess('hki')}>
                        Mulai Pendaftaran HKI
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Pendaftaran HKI</DialogTitle>
                        <DialogDescription>
                          Ikuti langkah-langkah berikut untuk mendaftarkan HKI Anda.
                        </DialogDescription>
                      </DialogHeader>
                      {renderProcessSteps()}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="prenup" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileSignature className="w-8 h-8 text-red-500 mr-2" />
                    Pembuat Perjanjian Pranikah
                  </CardTitle>
                  <CardDescription>
                    Buat perjanjian pranikah yang disesuaikan dengan pembuat formulir yang mudah digunakan.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-red-500 hover:bg-red-600 text-lg py-6 px-8" onClick={() => startProcess('prenup')}>
                        Buat Perjanjian Pranikah
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Perjanjian Pranikah</DialogTitle>
                        <DialogDescription>
                          Ikuti langkah-langkah berikut untuk membuat perjanjian pranikah Anda.
                        </DialogDescription>
                      </DialogHeader>
                      {renderProcessSteps()}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="business" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Building className="w-8 h-8 text-red-500 mr-2" />
                    Alat Pendirian Usaha
                  </CardTitle>
                  <CardDescription>
                    Dirikan PT, CV, atau badan usaha lainnya dengan mudah menggunakan formulir otomatis kami.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-red-500 hover:bg-red-600 text-lg py-6 px-8" onClick={() => startProcess('business')}>
                        Dirikan Usaha
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Pendirian Usaha</DialogTitle>
                        <DialogDescription>
                          Ikuti langkah-langkah berikut untuk mendirikan usaha Anda.
                        </DialogDescription>
                      </DialogHeader>
                      {renderProcessSteps()}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="legal-drafter" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <PenTool className="w-8 h-8 text-red-500 mr-2" />
                    AI Legal Drafter
                  </CardTitle>
                  <CardDescription>
                    Buat dokumen hukum dengan bantuan AI yang cerdas dan efisien.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-red-500 hover:bg-red-600 text-lg py-6 px-8" onClick={() => startProcess('legal-drafter')}>
                        Mulai Drafting
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>AI Legal Drafter</DialogTitle>
                        <DialogDescription>
                          Ikuti langkah-langkah berikut untuk membuat dokumen hukum Anda.
                        </DialogDescription>
                      </DialogHeader>
                      {renderProcessSteps()}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Keunggulan AI Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center">
                  <Brain className="w-12 h-12 text-red-500 mb-4" />
                  <span className="text-2xl">Analisis Cerdas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed">
                  AI kami menganalisis dokumen hukum dengan cepat dan akurat, memberikan wawasan mendalam untuk keputusan yang lebih baik.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center">
                  <Zap className="w-12 h-12 text-red-500 mb-4" />
                  <span className="text-2xl">Otomatisasi Cepat</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed">
                  Proses pembuatan dokumen dan pendaftaran yang efisien, menghemat waktu Anda hingga 70% dibandingkan metode tradisional.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center">
                  <Shield className="w-12 h-12 text-red-500 mb-4" />
                  <span className="text-2xl">Keamanan Terjamin</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed">
                  Perlindungan data dan privasi yang kuat dengan enkripsi tingkat lanjut, menjaga kerahasiaan informasi Anda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">Tentang Jurislabs</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Jurislabs adalah platform teknologi hukum mutakh ir yang dirancang khusus untuk pasar Indonesia. 
            Kami menggabungkan kecerdasan buatan dengan sumber daya hukum yang komprehensif untuk memberikan 
            solusi inovatif bagi profesional hukum, bisnis, dan individu. Dengan Jurislabs, kami bertujuan 
            untuk membuat layanan hukum lebih mudah diakses, efisien, dan terjangkau bagi semua.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-black py-12">
        <div className="container mx-auto text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jurislabs</h3>
              <p>Teknologi Hukum Berbasis AI untuk Indonesia</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <p>Email: info@jurislabs.id</p>
              <p>Telepon: +62 21 1234 5678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Alamat</h3>
              <p>Jl. Sudirman No. 123</p>
              <p>Jakarta Pusat, 10220</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p>&copy; 2024 Jurislabs. Hak cipta dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}