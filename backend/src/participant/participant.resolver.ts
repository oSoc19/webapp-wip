import { Resolver, Args } from '@nestjs/graphql';
import { Query, Mutation } from '@nestjs/graphql';
import { Participant } from './types/participant.type';
import { NewParticipantInput } from './inputs/new.particpant.input';
import { ParticipantService } from './participant.service';

@Resolver('Participant')
export class ParticipantResolver {
  constructor(private readonly participantService: ParticipantService) {}
  @Query(returns => [Participant], { nullable: true })
  participants() {
    return this.participantService.findAll();
  }

  @Query(returns => Participant, { nullable: true })
  participant(@Args('id') id: string): Promise<Participant> {
    return this.participantService.findOne(id);
  }

  @Mutation(returns => Participant)
  async addParticipant(
    @Args('input') input: NewParticipantInput,
  ): Promise<Participant> {
    return this.participantService.create(input);
  }
}