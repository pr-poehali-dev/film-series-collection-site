import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const movieData = [
    {
      id: 1,
      title: 'Темный город',
      type: 'Фильм',
      genre: 'Триллер',
      rating: 8.5,
      year: 2024,
      description: 'Захватывающий триллер о детективе, расследующем серию загадочных преступлений в неоновом городе.',
      image: '/img/8f3d0aa8-a473-453c-aea3-66a20a1780c0.jpg'
    },
    {
      id: 2,
      title: 'Космическая Одиссея',
      type: 'Сериал',
      genre: 'Фантастика',
      rating: 9.2,
      year: 2024,
      description: 'Эпическая сага о путешествиях в далекие галактики и борьбе за будущее человечества.',
      image: '/img/42fc1772-34ef-4aff-a641-6bb51b10e185.jpg'
    },
    {
      id: 3,
      title: 'Золотые сердца',
      type: 'Фильм',
      genre: 'Драма',
      rating: 7.8,
      year: 2023,
      description: 'Трогательная история о любви, которая преодолевает все препятствия времени.',
      image: '/img/e0331449-da3c-4ffe-9e85-6d16f7663158.jpg'
    }
  ];

  const collections = [
    { title: 'Топ недели', count: 15, gradient: 'from-coral to-turquoise' },
    { title: 'Новинки 2024', count: 23, gradient: 'from-turquoise to-sky' },
    { title: 'Классика', count: 42, gradient: 'from-sky to-coral' },
    { title: 'Сериалы', count: 31, gradient: 'from-coral via-turquoise to-sky' }
  ];

  const navItems = ['Главная', 'Фильмы', 'Сериалы', 'Подборки', 'Рейтинги'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white font-montserrat bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
              CineHub
            </h1>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-white/80 hover:text-white transition-colors font-medium ${
                    index === 0 ? 'text-white border-b-2 border-coral' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <Button variant="ghost" className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
            Мир <span className="bg-gradient-to-r from-coral via-turquoise to-sky bg-clip-text text-transparent">кино</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Открой для себя лучшие фильмы и сериалы. Создавай подборки, следи за новинками и делись впечатлениями.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Поиск фильмов и сериалов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-coral"
            />
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {collections.map((collection, index) => (
            <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className={`h-3 w-full bg-gradient-to-r ${collection.gradient} rounded-full mb-3`}></div>
                <CardTitle className="text-white font-montserrat">{collection.title}</CardTitle>
                <CardDescription className="text-white/60">{collection.count} фильмов</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-coral hover:text-white hover:bg-coral/20 w-full">
                  Смотреть всё <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Movies & Series Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-white font-montserrat">Популярное сегодня</h3>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white">
              Фильмы
            </Button>
            <Button variant="ghost" className="text-white/70 hover:text-white">
              Сериалы
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movieData.map((movie) => (
            <Card key={movie.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/70 text-white border-0">
                    {movie.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/70 px-2 py-1 rounded">
                    <Icon name="Star" className="text-yellow-400 fill-current" size={16} />
                    <span className="text-white text-sm font-medium">{movie.rating}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button className="bg-coral hover:bg-coral/80 text-white">
                    <Icon name="Play" size={16} className="mr-2" />
                    Смотреть
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white font-montserrat text-lg mb-1">{movie.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="border-turquoise text-turquoise text-xs">
                        {movie.genre}
                      </Badge>
                      <span className="text-white/60 text-sm">{movie.year}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-white/70 text-sm">
                  {movie.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-0">
                    <Icon name="Heart" size={16} className="mr-2" />
                    В избранное
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-0">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-coral to-turquoise hover:from-coral/80 hover:to-turquoise/80 text-white px-8 py-3">
            Показать больше
            <Icon name="ArrowDown" size={16} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4 font-montserrat">CineHub</h4>
              <p className="text-white/60 text-sm">
                Ваш персональный гид в мире кинематографа
              </p>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Разделы</h5>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Возможности</h5>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Автообновление релизов</li>
                <li>Персональные подборки</li>
                <li>Система рейтингов</li>
                <li>Умный поиск</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Связь</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">
                  <Icon name="Facebook" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8">
            <p className="text-white/40 text-sm text-center">
              © 2024 CineHub. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;