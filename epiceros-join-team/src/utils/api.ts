export const fetchTeamMembers = async () => {
    const response = await fetch('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6');
    const data = await response.json();
    return data;
};