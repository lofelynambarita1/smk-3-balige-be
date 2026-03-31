import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NewsService } from '../services/news.service';
import { CreateNewsDto, UpdateNewsDto } from '../dtos/news.dto';

// Controller ini memetakan /api/berita -> NewsService
// agar cocok dengan frontend yang memanggil /api/berita
@Controller('api/berita')
export class BeritaController {
  constructor(private newsService: NewsService) {}

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    const result = await this.newsService.findAll(page, limit);
    return result.data; // frontend expects array langsung
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.newsService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('gambar'))
  async create(
    @Body() body: any,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const dto: CreateNewsDto = {
      title: body.judul,
      content: body.isi,
      excerpt: body.isi ? body.isi.substring(0, 150) + '...' : '',
      imageUrl: file ? `/uploads/${file.filename}` : body.gambar || '',
      author: body.author || 'Admin',
      isFeatured: false,
    };
    // map kategori jika ada
    if (body.kategori) dto['kategori'] = body.kategori;
    return await this.newsService.create(dto);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('gambar'))
  async update(
    @Param('id') id: number,
    @Body() body: any,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const dto: UpdateNewsDto = {};
    if (body.judul) dto.title = body.judul;
    if (body.isi) dto.content = body.isi;
    if (file) dto.imageUrl = `/uploads/${file.filename}`;
    else if (body.gambar) dto.imageUrl = body.gambar;
    return await this.newsService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.newsService.delete(id);
    return { message: 'Berita berhasil dihapus' };
  }
}