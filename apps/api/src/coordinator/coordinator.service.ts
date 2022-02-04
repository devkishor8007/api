import { Injectable } from '@nestjs/common'
import { CreateCoordinatorDto } from './dto/create-coordinator.dto'
import { UpdateCoordinatorDto } from './dto/update-coordinator.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CoordinatorService {
  constructor(private prisma: PrismaService) {}

  create(createCoordinatorDto: CreateCoordinatorDto) {
    return this.prisma.coordinator.create({ data: createCoordinatorDto })
  }

  findAll() {
    return this.prisma.coordinator.findMany({ include: { person: true, beneficiaries: true, campaigns: true } })
  }

  findOne(id: string) {
    return this.prisma.coordinator.findUnique({ where: { id }, include: { person: true, beneficiaries: true, campaigns: true } })
  }

  update(id: string, updateCoordinatorDto: UpdateCoordinatorDto) {
    return this.prisma.coordinator.update({ where: { id }, data: { ...updateCoordinatorDto } })
  }

  remove(id: string) {
    return this.prisma.coordinator.delete({ where: { id } })
  }
}
