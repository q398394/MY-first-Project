import { test, expect } from '@playwright/test';

test('my first test', async ({ page }) => {
  await page.goto('https://www.google.at/?gws_rd=ssl');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).fill('a1 angebote');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.at/search%3Fsafe%3Dactive%26q%3Da1%2Bangebote%26sca_esv%3Dccffd9c45e00e758%26source%3Dhp%26ei%3DgV3uZ-7zFNPg7_UPrvPDqQY%26iflsig%3DACkRmUkAAAAAZ-5rkQ8Z8LWilpW0HV1bjNLGNK6wx9Tc%26ved%3D0ahUKEwiuuJvSzruMAxVT8LsIHa75MGUQ4dUDCBA%26uact%3D5%26oq%3Da1%2Bangebote%26gs_lp%3DEgdnd3Mtd2l6IgthMSBhbmdlYm90ZTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIpbMBUM56WNqLAXABeACQAQCYAZkBoAHQCaoBAzQuN7gBA8gBAPgBAZgCDKACgQqoAgrCAgoQLhgDGOoCGI8BwgIKEAAYAxjqAhiPAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgsQLhiABBixAxiDAcICCBAAGIAEGLEDmAMN8QXXMC7vULybUpIHAzMuOaAH0TiyBwMyLjm4B_QJ%26sclient%3Dgws-wiz%26sei%3Dy13uZ_jZJvOK9u8P3J_xoAs%26safe%3Dactive&q=EgSI4sZQGNC7ub8GIjDj7ZDyFZ4vQdJIl2wvFofkC_UHG3uV62kIhcTsv27eE11FdnmPd96Zb4qPtGZrzpsyAnJSWgFD');

});