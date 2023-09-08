import { ExpenseCategory } from '@/models/Expense'
import { colors } from 'quasar'

export default function useCharting() {
  const { getPaletteColor } = colors

  function getSingleChartOptions() {
    return {
      reactive: true,
      responsive: true,
      aspectRatio: 1,
      radius: 2,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: (tooltipItem: any) => tooltipItem?.[0]?.label ?? '',
          },
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          ticks: {
            autoSkip: true,
            maxRotation: 70,
            minRotation: 70,
          },
        },
      },
    }
  }

  function getSingleChartDataset(
    items: any[],
    upTrendColor: string,
    downTrendColor: string,
    pointColor?: string
  ) {
    return {
      data: items,
      label: '', // No legend label for single chart
      backgroundColor: pointColor || getPaletteColor('white'),
      borderColor: pointColor || getPaletteColor('black'),
      segment: {
        borderColor: (ctx: any) => {
          return ctx.p0.parsed.y > ctx.p1.parsed.y
            ? getPaletteColor(downTrendColor)
            : undefined || getPaletteColor(upTrendColor)
        },
      },
    }
  }

  function getPieChartOptions() {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    }
  }

  function getPieChartData(
    housing: number,
    transportation: number,
    education: number,
    groceries: number,
    entertainment: number,
    healthAndFitness: number,
    investments: number,
    eatingAndDrinkingOut: number,
    gifts: number,
    other: number
  ) {
    return {
      labels: Object.values(ExpenseCategory),
      datasets: [
        {
          data: [
            housing,
            transportation,
            education,
            groceries,
            entertainment,
            healthAndFitness,
            investments,
            eatingAndDrinkingOut,
            gifts,
            other,
          ],
          backgroundColor: [
            getPaletteColor('amber-8'), // Housing
            getPaletteColor('deep-orange'), // Transportation
            getPaletteColor('indigo'), // Education
            getPaletteColor('light-green'), // Groceries
            getPaletteColor('blue-8'), // Entertainment
            getPaletteColor('red-10'), // Health & Fitness
            getPaletteColor('green'), // Investments
            getPaletteColor('purple-8'), // Eating & Drinking Out
            getPaletteColor('pink-8'), // Gifts
            getPaletteColor('blue-grey'), // Other
          ],
        },
      ],
    }
  }

  return {
    getSingleChartOptions,
    getSingleChartDataset,
    getPieChartOptions,
    getPieChartData,
  }
}
