import type { TLShape } from '@tldraw/core'

export interface PointShape extends TLShape {
  type: 'box'
  size: number[]
}
