async function getChatHistory(userId) {
    const chatHistory = await prisma.chat.findMany({
      where: {
        OR: [
          { userId: userId },      // Messages sent by the user
          { senderType: 'BOT' },   // Messages sent by the bot
        ],
      },
      orderBy: {
        createdAt: 'asc',  // Order messages by the time they were sent
      },
    });
  
    console.log('Chat history:', chatHistory);
    return chatHistory;
  }
  
  // Example usage
  getChatHistory(1); // Fetch chat history for user with ID 1
  