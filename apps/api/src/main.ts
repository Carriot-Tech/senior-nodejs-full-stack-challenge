import { Logger } from '@nestjs/common';
import { CONFIGURATIONS } from './configurations';
import { SERVICES } from './services';

async function main() {
  const logger = new Logger(CONFIGURATIONS.SERVICE_TYPE);
  const selectedService = SERVICES[CONFIGURATIONS.SERVICE_TYPE];
  if (selectedService) {
    await selectedService();
  } else {
    logger.log(`Invalid service type: ${CONFIGURATIONS.SERVICE_TYPE}`);
  }
}

main().catch((err) => console.error('Error:', err));
