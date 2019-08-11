const tasse = require('./tasse');

test('Tasse IRPEF 1000', () => {
  expect(tasse(1000, "IRPEF")).toBe(230);
});

test('Tasse IRPEF 20K', () => {
  expect(tasse(20000, "IRPEF")).toBe(4800);
});

test('Tasse IRPEF 60K', () => {
  expect(tasse(60000, "IRPEF")).toBe(19270);
});

test('Tasse IRPEF 15K', () => {
  expect(tasse(15000, "IRPEF")).toBe(3450);
});

test('Tasse IRPEF 15000.10', () => {
  expect(tasse(15000.10, "IRPEF")).toBe(3450.03);
});

test('Tasse IRPEF 100K', () => {
  expect(tasse(100000, "IRPEF")).toBe(36170);
});

test('Tasse IVA 0', () => {
    expect(tasse(0, "IVA")).toBe(0);
});

test('Tasse IVA 1000', () => {
  expect(tasse(1000, "IVA")).toBe(180.33);
});

test('Tasse IVA AGEVOLATA 1000', () => {
  expect(tasse(1000, "IVA-AGEVOLATA")).toBe(90.91);
});
