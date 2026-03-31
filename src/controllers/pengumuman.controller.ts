import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AnnouncementService } from '../services/announcement.service';
import { AnnouncementType } from '../entities/announcement.entity';

// Controller ini memetakan /api/pengumuman -> AnnouncementService
@Controller('api/pengumuman')
export class PengumumanController {
  constructor(private announcementService: AnnouncementService) {}

  @Get()
  async findAll() {
    const result = await this.announcementService.findAll(1, 100);
    return result.data.map(a => ({
      id: a.id,
      judul: a.title,
      isi: a.content,
      created_at: a.createdAt,
    }));
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const a = await this.announcementService.findById(id);
    return { id: a.id, judul: a.title, isi: a.content };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: any) {
    const ann = await this.announcementService.create({
      title: body.judul,
      content: body.isi || '',
      type: AnnouncementType.BIASA,
      author: 'Admin',
    });
    return { id: ann.id, judul: ann.title, isi: ann.content };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    const dto: any = {};
    if (body.judul) dto.title = body.judul;
    if (body.isi !== undefined) dto.content = body.isi;
    const ann = await this.announcementService.update(id, dto);
    return { id: ann.id, judul: ann.title, isi: ann.content };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.announcementService.delete(id);
    return { message: 'Pengumuman berhasil dihapus' };
  }
}