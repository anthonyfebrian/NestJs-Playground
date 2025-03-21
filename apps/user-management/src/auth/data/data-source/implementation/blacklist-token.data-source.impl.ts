import { Inject, Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { BlacklistTokenDataSource } from "../blacklist-token.data-source";

/**
 * Implementation of the BlacklistTokenDataSource interface for managing blacklisted tokens using Redis.
 */
@Injectable()
export class BlacklistTokenDataSourceImpl implements BlacklistTokenDataSource {
  /**
   * Constructs a new instance of BlacklistTokenDataSourceImpl.
   * @param redis - The Redis client instance injected.
   */
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: Redis
  ) { }

  /**
   * Adds a token to the blacklist.
   * @param tokenPayload - The payload of the token to be blacklisted, containing tokenId, exp, and iat.
   * @returns An object containing a message indicating the token has been blacklisted.
   */
  addToken(tokenPayload: any) {
    const tokenId = tokenPayload.tokenId;
    const expirationSeconds = tokenPayload.exp - tokenPayload.iat;
    
    this.redis.set(this.blackListId(tokenId), 'Blacklisted', 'EX', expirationSeconds);
    return { message: 'Token blacklisted : ' + tokenId };
  }

  /**
   * Checks if a token is blacklisted.
   * @param tokenId - The ID of the token to check.
   * @returns A promise that resolves to a boolean indicating whether the token is blacklisted.
   */
  async isTokenBlacklisted(tokenId: string): Promise<boolean> {
    return await this.redis.exists(this.blackListId(tokenId)) === 1;
  }

  /**
   * Generates the Redis key for a blacklisted token.
   * @param tokenId - The ID of the token.
   * @returns The Redis key for the blacklisted token.
   */
  blackListId(tokenId: string) {
    return `blacklist:${tokenId}`;
  } 
}