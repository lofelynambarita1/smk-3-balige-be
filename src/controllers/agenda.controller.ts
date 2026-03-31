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
} from '@nestjs/common';
import { ScheduleService } from '../services/schedule.service';
import { ScheduleCategory } from '../entities/schedule.entity';

// Controller ini memetakan /api/agenda -> ScheduleService
@Controller('api/agenda')
export class AgendaController {
  constructor(private scheduleService: ScheduleService) {}

  @Get()
  async findAll() {
    const result = await this.scheduleService.findAll(1, 100);
    // Map field names agar cocok dengan frontend
    return result.data.map(s => ({
      id: s.id,
      judul: s.title,
      tanggal: s.date,
      lokasi: s.location,
      created_at: s.createdAt,
    }));
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const s = await this.scheduleService.findOne(id);
    return {
      id: s.id,
      judul: s.title,
      tanggal: s.date,
      lokasi: s.location,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: any) {
const schedule = await this.scheduleService.create({
  title: body.judul,
  date: body.tanggal,
  location: body.lokasi || '',
  description: body.deskripsi || '',
  startTime: body.startTime || null, // ✅ FIX
  endTime: body.endTime || null,     // ✅ FIX
  participants: body.participants || '',
  category: ScheduleCategory.KEGIATAN,
  imageUrl: '',
});
    return {
      id: schedule.id,
      judul: schedule.title,
      tanggal: schedule.date,
      lokasi: schedule.location,
    };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    const dto: any = {};
    if (body.judul) dto.title = body.judul;
    if (body.tanggal) dto.date = body.tanggal;
    if (body.lokasi !== undefined) dto.location = body.lokasi;
    const schedule = await this.scheduleService.update(id, dto);
    return {
      id: schedule.id,
      judul: schedule.title,
      tanggal: schedule.date,
      lokasi: schedule.location,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.scheduleService.remove(id);
    return { message: 'Agenda berhasil dihapus' };
  }
}