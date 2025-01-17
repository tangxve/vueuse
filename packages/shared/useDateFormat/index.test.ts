import { useDateFormat } from '../useDateFormat'

describe('useDateFormat', () => {
  it('should work with default', () => {
    expect(useDateFormat(new Date('2022-01-01 10:24:00')).value).toBe('10:24:00')
  })
  it('should work with time string ', () => {
    expect(useDateFormat('2022-01-01 20:24:24', 'YYYY—MM-DD HH:mm:ss').value).toBe('2022—01-01 20:24:24')
  })
  it('should work with YYYY-MM-DD', () => {
    expect(useDateFormat(new Date('2022-01-01 10:24:00'), 'YYYY-MM-DD').value).toBe('2022-01-01')
  })
  it('should work with YY-M-D', () => {
    expect(useDateFormat(new Date('2022-01-01 10:24:00'), 'YY-M-D').value).toBe('22-1-1')
  })
  it('should work with h:m:s', () => {
    expect(useDateFormat(new Date('2022-01-01 08:05:00'), 'h:m:s').value).toBe('8:5:0')
  })
  it('should work with hh:mm:ss', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'hh:mm:ss').value).toBe('03:05:05')
  })
  it('should work with HH:mm:ss', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'HH:mm:ss').value).toBe('15:05:05')
  })
  it('should work with HH:mm:ss:SSS', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05:999'), 'HH:mm:ss:SSS').value).toBe('15:05:05:999')
  })
  it('should work with HH:mm:ss d', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'HH:mm:ss d').value).toBe('15:05:05 6')
  })
  it('should work with YYYY/MM/DD dd', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'YYYY/MM/DD dd', { locales: 'en-US' }).value).toBe('2022/01/01 S')
  })
  it('should work with YYYY/MM/DD ddd', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'YYYY/MM/DD ddd', { locales: 'en-US' }).value).toBe('2022/01/01 Sat')
  })
  it('should work with YYYY/MM/DD dddd', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'YYYY/MM/DD dddd', { locales: 'en-US' }).value).toBe('2022/01/01 Saturday')
  })
  it('should work with MMM DD YYYY', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'MMM DD YYYY', { locales: 'en-US' }).value).toBe('Jan 01 2022')
  })
  it('should work with MMMM DD YYYY', () => {
    expect(useDateFormat(new Date('2022-01-01 15:05:05'), 'MMMM DD YYYY', { locales: 'en-US' }).value).toBe('January 01 2022')
  })
})
