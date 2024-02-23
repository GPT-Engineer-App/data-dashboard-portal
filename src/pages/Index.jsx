import { Box, Flex, Heading, Text, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, Container } from "@chakra-ui/react";
import { FaTemperatureHigh, FaWind, FaSmog } from "react-icons/fa";

const Index = () => {
  const dashboardItems = [
    {
      icon: FaTemperatureHigh,
      label: "Temperature",
      value: "22°C",
      change: "1.2%",
      status: "increase",
    },
    {
      icon: FaWind,
      label: "Wind Speed",
      value: "15 km/h",
      change: "0.8%",
      status: "decrease",
    },
    {
      icon: FaSmog,
      label: "Air Quality",
      value: "Good",
      change: "5%",
      status: "increase",
    },
  ];

  const DashboardStat = ({ icon, label, value, change, status }) => {
    const IconComponent = icon;
    return (
      <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
        <Flex alignItems="center">
          <Box fontSize="3xl" color="teal.500" as={IconComponent} />
          <Box ml={4}>
            <StatLabel fontWeight="medium">{label}</StatLabel>
            <StatNumber fontSize="2xl">{value}</StatNumber>
            <StatHelpText>
              <StatArrow type={status} />
              {change}
            </StatHelpText>
          </Box>
        </Flex>
      </Stat>
    );
  };

  return (
    <Container maxW="container.xl" p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDg2NTE1ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile image" mb={4} />
        <Heading as="h2" size="xl">
          John Doe
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Data Analyst & Dashboard Specialist
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {dashboardItems.map((item, index) => (
          <DashboardStat key={index} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
