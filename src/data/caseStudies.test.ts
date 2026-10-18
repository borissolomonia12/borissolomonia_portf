import { describe, expect, it } from 'vitest'
import projectAssets from '../generated/projectAssets.json'
import assetConfig from '../../config/portfolio-assets.json'
import { caseStudies } from './caseStudies'
import { connectionStages, integrationBrands, requirePortfolioAsset, systemModules, systemProducts } from './portfolio'

describe('typed portfolio registries', () => {
  it('provides unique optimized WebP assets with dimensions', () => {
    expect(projectAssets.map(asset => asset.id)).toEqual(assetConfig.map(asset => asset.id))
    expect(new Set(projectAssets.map((asset) => asset.id)).size).toBe(projectAssets.length)
    projectAssets.forEach((asset) => { expect(asset.src).toMatch(/^\/projects\/network\/.+\.webp$/); expect(asset.width).toBeGreaterThan(0); expect(asset.height).toBeGreaterThan(0); expect(asset.bytes).toBeGreaterThan(0) })
    expect(() => requirePortfolioAsset('missing-asset')).toThrow(/Missing generated portfolio asset/)
  })

  it('covers all products, ERP modules, stages, case studies and integration marks', () => {
    expect(systemProducts).toHaveLength(7)
    expect(systemModules).toHaveLength(9)
    expect(connectionStages).toHaveLength(7)
    expect(caseStudies).toHaveLength(4)
    expect(new Set(caseStudies.map((study) => study.id)).size).toBe(caseStudies.length)
    expect(Object.keys(integrationBrands)).toEqual(['rsge', 'bog', 'tbc', 'wolt', 'glovo'])
    expect(systemProducts.map((product) => product.name)).toEqual(['9T ERP', 'Tasty ERP', 'WaybillMCP', 'Optimo Sync', 'Order App', 'AI Booking Assistant', 'BachmannLogi'])
    expect(systemProducts.filter((product) => product.visualType === 'architecture').map((product) => product.id)).toEqual(['waybill-mcp', 'ai-booking'])
    expect(new Set(systemProducts.filter((product) => product.asset).map((product) => product.asset?.id)).size).toBe(5)
  })
})
