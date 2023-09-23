import { z } from 'zod'

export const registerGestacionalAnamnese = z.object({
  gestationalPeriod: z.string(),
  PreNatal: z.boolean(),
  DoctorName: z.string(),
  Complications: z.string(),
  NumberSon: z.number(),
  ContractionSchedule: z.string(),
  Duration: z.string(),
  Interval: z.string(),
  HiPressure: z.boolean(),
  BagRuptured: z.boolean(),
  VisualInspection: z.boolean(),
  Childbirth: z.boolean(),
  BabyGender: z.string(),
  BornHour: z.string(),
  BabyName: z.string(),
  FinalRemarks: z.string(),
  ReportOwnerId: z.number(),
})

export const updateGestacionalAnamnese = z.object({
  gestationalPeriod: z.string().optional(),
  PreNatal: z.boolean().optional(),
  DoctorName: z.string().optional(),
  Complications: z.string().optional(),
  NumberSon: z.number().optional(),
  ContractionSchedule: z.string().optional(),
  Duration: z.string().optional(),
  Interval: z.string().optional(),
  HiPressure: z.boolean().optional(),
  BagRuptured: z.boolean().optional(),
  VisualInspection: z.boolean().optional(),
  Childbirth: z.boolean().optional(),
  BabyGender: z.string().optional(),
  BornHour: z.string().optional(),
  BabyName: z.string().optional(),
  FinalRemarks: z.string().optional(),
  ReportOwnerId: z.number().optional(),
})
