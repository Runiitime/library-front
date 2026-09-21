import { generateEndpoints, parseConfig } from '@rtk-query/codegen-openapi';
import erpStaticConfig from './config/openapi-books-config.js';

for (const cfg of parseConfig(erpStaticConfig)) {
    console.log(`🔧 Generating ${cfg.outputFile}`);
    await generateEndpoints(cfg);
    console.log('✅ Done');
}
